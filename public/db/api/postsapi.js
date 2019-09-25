const posts=require('../posts');



//  get all post
function getAllposts(data,req,res){
    posts.find({},function(err,res){
        if(err) {
            return res.json({
                success : 'false',
                err : err.message
            })
        }else{
            return res;
        }
    })
}


//get one post

function getOnepost(req,res){
    posts.findOne({id : res.param.id},function(err,res){
        if(err) throw err;
        return res;
    })
}


//insert post
function postInsert(req,res){

    // first get all post length for new id value
    let id=posts.find({},function(err,res){
        if(err) throw err;
        return res.length;
    })
    let data=req.body;
    let postContent={
        id  : id,
        title : data.title,
        content : data.content,
        date : data.date
    }
    postContent.save(function(err,res){
        if(err) throw err;
        return 'success';
    })
}

module.exports={
    all : getAllposts,
    one : getOnepost,
    insert : postInsert
}