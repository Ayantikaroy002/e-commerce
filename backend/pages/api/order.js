import Order from "../../models/Order"
import connectdb from "../../middleware/mongoose"


const handler = async(req, res) => {
    if(req.method === 'POST'){
        try{
         let Orders = new Order(req.body)
         await Orders.save()  
         res.status(200).json({success:'order added successfully'})
        } catch (error) {
            res.status(500).json({ error: 'Error creating order' });
          }

        }else if(req.method === 'GET'){
        try{
            const orders = await Order.find({})
            res.status(200).json({success:'valid', orders})
        } catch (error) {
            res.status(500).json({ error: 'Error fetching orders' });
          } 
         } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
          }     
    }


export default connectdb(handler);






