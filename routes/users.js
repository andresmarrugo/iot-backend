var express = require('express');
var router = express.Router();


router.get('/', (req, res, next)=>{
  res.send('hola');
});

router.post('/signup', function(req, res, next) {
  var messages=['Hola desde signup con Sockets!'];
     console.log(' Signup with Sockets'+ io.id);
     io.emit('messages', messages);
  
     io.on('nuevo-mensaje', function(data) {
      console.log("desde el server: ",data);
      });
  
    
  });

  module.exports = router;

