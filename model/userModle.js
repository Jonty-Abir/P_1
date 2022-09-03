
const mongoose= require('mongoose');

const schema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    gender:{
        type:String,
        required:true,
        enum:['Male','Female'], 
    },
    status:{
        type:String,
        required:true,
        enum:['Active','Inactive']
    },
    date:{
        type: Date,
        default:Date.now
    }
});



// statick methods
 schema.statics={
    findeByEmail:function(email){
        return this.findOne({email})
    }
 }

 // instance methods
 schema.methods={
    updateUser: function(){
        return mongoose.model('user').findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
    }
 }
 const Model = new mongoose.model('user',schema);

module.exports=Model;

