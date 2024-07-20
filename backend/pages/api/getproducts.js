import Products from "../../models/Product"
import connectdb from "../../middleware/mongoose"


const handler = async(req, res) => {
    let product = await Products.find()
    res.status(200).json({product})

}
export default connectdb(handler);