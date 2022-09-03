


function decodedHtmlresponse(title_of_a_page){
    return function(req,res,next){
        res.locals.html=true;
        res.locals.error={};
        res.locals.title= title_of_a_page || {};
        res.locals.userDetails={};
        next();
    }
}
module.exports={decodedHtmlresponse};

