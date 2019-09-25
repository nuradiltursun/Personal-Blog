
// there are user data
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const postsSchema=new Schema({
    id : {
        type : Number,
        required : true
    },
    title : {
        type : String,
        maxlength : 200,
        require : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    content : {
        type : String,
        required : true
    }
})

module.exports=mongoose.model('posts',postsSchema);
