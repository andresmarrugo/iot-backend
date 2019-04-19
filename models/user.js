var mongoose = require('mongoose');
var {url}=require('../config/database');

mongoose.connect(url, { useNewUrlParser: true })
.then(db=>{
    console.log('database conected');   
})
.catch(err=>{
    console.log('error:', err );
});


var user=new mongoose.model('user',{
    email: String,
    password: String
}, 'users');



module.exports = user;

