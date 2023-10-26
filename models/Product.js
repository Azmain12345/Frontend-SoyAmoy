import mongoose, { model, Schema, models } from "mongoose";

// Define the schema for the Product entity
const ProductSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: {type: Number, required: true},
    category: [{type:mongoose.Types.ObjectId, ref:'Category'},]
        // images: {type:[String]},
}, {
    timestamps: true,
})

// Create or retrieve the Product model based on existing models
export const Product = models.Product || model('Product', ProductSchema);