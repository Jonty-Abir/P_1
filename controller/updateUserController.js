


const updateUser= (req,res)=>{
    if(res.locals.html){
        res.render('update_user');
    }else{
        res.json({
            msg:'this is updateUser.'
        });
    }
}
module.exports=updateUser;