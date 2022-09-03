const errorHandle=(err,req,res,next)=>{
    res.locals.errors= process.env.NODE_ENV='devlopment'? err :err.message;
    res.status(err.status || 500);
    if(res.locals.html){
        
        res.render('./partials/error',{
            title: "this is error page!",
            error:{
                msg:err.message,
                status:err.status  || 500,
                stack:err.stack
            }
        });
    }else{
        res.json({err});
    }
}
// not found handler
const notFound=(req,res,next)=>{
    res.send('Your Requested content was not found!');
}

module.exports={errorHandle ,notFound};