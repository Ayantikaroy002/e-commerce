const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userid: {type:String, required:true},
    products: [{
        productid: {type:String},
        quantity: {type: Number, default:1},
    }],
    address: {type:String, required:true},
    amount: {type:Number, required:true},
    status: {type:String, default: 'Pending', required:true}

}, {timestamps:true});

mongoose.models = {}
export default mongoose.model("Order", OrderSchema);


