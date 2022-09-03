
const User= require('../model/userModle');

const createUser= async (req,res,next)=>{
try{
    const obj={
        ...req.body
    }
    const newUser= new User(obj);
    const data=await newUser.save();
    res.status(200).json({mas:'ok'});
}catch(err){
    next(err)
}
}
module.exports={createUser};