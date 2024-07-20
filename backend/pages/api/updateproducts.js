import Products from "../../models/Product"
import connectdb from "../../middleware/mongoose"


const handler = async(req, res) => {
    if(req.method === 'POST'){
      for(let i=0; i<req.body.length; i++){
         let Product = await Products.findByIdAndUpdate(req.body[i]._id, req.body[i])
      }
      res.status(200).json({success:'valid'})    
    }else{
        res.status(400).json({error: 'Invalid'})
    }

}
export default connectdb(handler);
