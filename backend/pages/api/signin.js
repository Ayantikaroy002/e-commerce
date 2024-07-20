import User from "../../src/app/models/User"
import connectdb from "../../src/app/middleware/mongoose"


const handler = async(req, res) => {
    if(req.method === 'POST'){
     let user = await User.findOne({"email": req.body.email})
        if(user) {
            if(req.body.email == user.email && req.body.password == user.password) {
                res.status(200).json({success: true, email: user.email, name: user.name})
            }
            else {
                res.status(401).json({error: 'Invalid credentials'})
            }
            
        } else {
            res.status(404).json({error: 'User not found'})
        }
    }else{
        res.status(400).json({error: 'Invalid'})
    }

}
export default connectdb(handler);
