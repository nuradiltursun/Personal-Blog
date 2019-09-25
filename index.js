const express=require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser')
const app=express();

app.use(bodyParser.urlencoded({extended : true}));
const userRouter=require('./router/user');
const postsRouter=require('./router/posts');
const homeRouter=require('./router/home');

const db=require('./public/db/connect');

app.set('views',__dirname+'/public/views');
app.set('view engine','ejs');

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.use(cookieParser());

app.use('/',homeRouter);
app.use('/admin',userRouter);
app.use('/posts',postsRouter);

const port=80;





app.listen(port,function(error){
    if(error) throw error;
    console.log('run at '+port);
})
