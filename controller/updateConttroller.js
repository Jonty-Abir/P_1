
const mongoose = require("mongoose");
const User = require("../model/userModle");

const update = async (req, res, next) => {
  try {
    let data = await User.findOne({ _id: req.params.id });
    
    if(res.locals.html){
        res.locals.userDetails=data;
        res.render('update_user');
    }else{
        res.json('update');
    }
  } catch (err) {
    next(err);
  }
};

const updateAuser= async (req,res,next)=>{
   try{
     //console.log(req.body)
     if(req.body){
        const data= await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
        
    }
    res.status(200).json({
        msg:'ok'
    });
   }catch(err){
    res.status(500).json({
        errors:err
    });
   }
}

const deleteUser= async (req,res,next)=>{
    try{
        const data= await User.findByIdAndDelete({_id:req.params.id});
        res.status(200).json({
            msg:'ok'
        });
    }catch(err){
        res.status(500).json({
            errors:err
        });
    }
}


module.exports= { update,updateAuser,deleteUser };
