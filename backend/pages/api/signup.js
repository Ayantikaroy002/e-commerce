import User from "../../models/User"
import connectdb from "../../middleware/mongoose"


const handler = async(req, res) => {
    if(req.method === 'POST'){
      let Users = new User(req.body)
         await Users.save()  
         res.status(200).json({success:'valid'})   
         
       
    }else{
        res.status(400).json({error: 'Invalid'})
    }

}
export default connectdb(handler);
