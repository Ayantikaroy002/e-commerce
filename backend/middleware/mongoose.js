import mongoose from 'mongoose';

const connectdb = handler => async(req, res)=>{
    if(mongoose.connection.readyState){
        return handler(req,res)
    }
    await mongoose.connect(process.env.MONGODB_URI)
    return handler(req,res);
}

export default connectdb