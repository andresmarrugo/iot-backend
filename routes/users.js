var express = require('express');
var router = express.Router();


router.get('/', (req, res, next)=>{
  res.send('hola');
});

router.post('/signup', function(req, res, next) {
  
    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    //console.log(req);
    /* req.login(user, function(err) {
        if (err) {
            console.log(user);
            console.log(err);
            return next(err); 
        }
        
        res.cookie('remerberme','2',{maxAge: 60000});
        
        return res.redirect('/users/');
      }); */
      res.cookie('session','2');
      res.send('ok');

  });

  router.post('/signin',(req, res, next)=>{
      res.send('aqui ira el registro');
  });


module.exports = router;
