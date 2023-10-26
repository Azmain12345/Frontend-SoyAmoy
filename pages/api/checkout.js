import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import {Order} from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req,res) {
    if (req.method !== 'POST') {
        res.json('should be a POST request');
        return;
    }

        // Destructure the necessary data from the request body
    const {
        name,email,city,
        postalCode,streetAddress,country,
        cartProducts,
    } = req.body;
    await mongooseConnect();
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({_id:uniqueIds});

    let line_items = [];
    for (const productId of uniqueIds) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'GBP',
                    product_data: {name:productInfo.title},
                    unit_amount: quantity * productInfo.price * 100,
                },
            });
        }
    }

        // Create a new order document in the database
    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,
        streetAddress,country,paid:false,
        });

            // Create a Stripe checkout session for payment
    const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart?success=1',
    cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    metadata: {orderId:orderDoc._id.toString(),test:'ok'},
    });

    res.json({
    url:session.url,
    })
    
}
