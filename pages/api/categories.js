import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";
import {getServerSession} from "next-auth";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    await isAdminRequest(req,res);

    if (method === 'GET') {
        res.json(await Category.find());
    }

    if (method === 'POST') {
        const {name, parentCategory} = req.body;
        const categoryDoc = await Category.create({
            name, 
            parent:parentCategory || undefined,
        });
        res.json(categoryDoc);
    }
    if (method === 'PUT') {
        const {name, parentCategory,_id} = req.body;
        const categoryDoc = await Category.updateOne({_id},{
            name, 
            parent:parentCategory || undefined,
        });
        res.json(categoryDoc);
    }
    if (method === 'DELETE') {
        const {_id} = req.query;
        await Category.deleteOne({_id});
        res.json('ok');
    }
}