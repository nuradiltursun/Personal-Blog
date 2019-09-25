const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/simpleblog');
const db=mongoose.connection;


// success
db.on('open',function(){
    console.log('connect success...');
});


// faild
db.on('error',function(){
    console.log('connect faild...');
})

// interrupt

module.exports=db;