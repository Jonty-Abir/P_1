const User= require('../model/userModle');

const getUser=async (req,res,next)=>{
    if(res.locals.html){
       const data=await User.find();
       res.locals.users=data
        res.render('index');
    }else{
        res.json({
            msg:`it's getUser.`
        });
    }
}

module.exports={getUser};