var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
    //res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    console.log(req.user);
    req.login(user, function(err) {
        if (err) {
            console.log(user);
            console.log(err);
            return next(err); 
        }
        
        res.cookie('remerberme','2',{maxAge: 60000});
        
        return res.redirect('/users/');
      });

  });

  router.get('/signin',(req, res, next)=>{
      res.send('aqui ira el registro');
  });

module.exports = router;
