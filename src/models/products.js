import mongoose from "mongoose";

const options = {

    collection: 'products',
    versionKey: false

}

const productsSchema = new mongoose.Schema({

    name: {type: String},
    price: {type: Number},
    stock: {type: Number},
    category: {type: String},
    created: {type: Date, default: Date.now},


}, options);

const Products = mongoose.model('Products', productsSchema)

export {Products};