import Products from "../../models/Product"
import connectdb from "../../middleware/mongoose"


const handler = async(req, res) => {
    if(req.method === 'POST'){
      for(let i=0; i<req.body.length; i++){
         let Product = new Products({
            title: req.body[i].title,
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color: req.body[i].color,
            price: req.body[i].price,
            quantity: req.body[i].quantity,
         })
         await Product.save()
        }
           
         res.status(200).json({success:'valid'})     
    }else{
        res.status(400).json({error: 'Invalid'})
    }

}
export default connectdb(handler);
