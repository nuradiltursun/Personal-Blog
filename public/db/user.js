
// there are user data
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const userSchema=new Schema({
    username :{
        required : true,
        type : String
    },
    password : {
        type : String,
        required : true
    }
})

module.exports=mongoose.model('user',userSchema);
