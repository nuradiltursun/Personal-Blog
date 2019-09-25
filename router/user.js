const express=require('express');


// get api from db api
const user=require('../public/db/user');

const router=express.Router();



// home page
router.get('/',function(req,res){
    let name=req.cookies.username;
    console.log(name);
    if(name !== undefined){
        const post=require('../public/db/posts');
        post.find({},function(err,info){
            if(err) throw err;
            if(info){
                let newinfo = info.reverse();
                res.render('./user/home',{ data : newinfo ,info : ''})
            }
            else{
                res.render('./user/admin',{ data : {},info : 'some error'});
            }
        })
    }
    else{
        res.redirect('/');
    }

})

// tips fro login
router.get('/login',function(req,res){
    // if()
    let name=req.cookies.username;
    // console.log(name);
    if(name !== undefined){
        res.redirect('/admin');
    }
    else{
        res.render('./user/login',{info : ''});
    }
   
})






// admin login page or success  登陆
router.post('/login',function(req,res){
    let body=req.body;
    // console.log(body);
        if(body !== undefined){
            user.findOne({username : body.username},function(err,resdata){
                if(err) throw err;
                // no user
                if(!resdata){
                    res.render('./user/login',{info : 'no this admin user ....'});
                }
                // user exist check password
                else{
                    if(resdata.password == body.password){
                        console.log('user pass word',resdata.password,'name is :' ,resdata.username);
                        res.cookie('username',resdata.username,{  maxAge : 90000000000 ,httpOnly: true });
                        res.redirect('/admin');
                    }else{
                        res.render('./user/login',{info : 'password hata..'});
                    }
    
                }
               
            })
        }

    
   
});







// admin insert post page
router.get('/insert',function(req,res){

    let name=req.cookies.username;
    if(name !== undefined){
        res.render('./user/insert',{info : ''});

    }
    else{
        res.redirect('/');
    }
    
})



router.get('/logout',function(req,res){
    res.cookie('username','',{ expires: new Date(0)});
    res.redirect('/admin/login');
})

router.get('/contact',function(req,res){
    res.render('./user/contact.ejs',{});
})




module.exports=router;