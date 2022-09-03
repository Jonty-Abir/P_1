

const addUser= (req,res,next)=>{
    if(res.locals.html){
        res.render('add_user');
    }else{
        res.json({
            msg:"this add_user.."
        });
    }
}
 module.exports=addUser;