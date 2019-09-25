const express=require('express');

const router=express.Router();

router.get('/',function(req,res){
    // 其实在这里有很大的数据要全送出去
    res.render('./home/index',{});
})

module.exports=router;