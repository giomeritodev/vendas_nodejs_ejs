var express = require('express');
var router = express.Router();

var users = require('./../inc/users');


/* GET users listing. */
router.get('/login', function(req, res, next){

  users.render(req, res, null);

});


router.post('/login', function(req, res, next){
  if(!req.body.email){
    users.render(req, res, "Preencha o campo email");
  }else if(!req.body.password){
    users.render(req, res, "Preencha o campo senha");
  }else{
    users.login(req.body.email, req.body.password).then(user => {
      
      req.session.user = user;
     
      res.redirect("/");
      
    }).catch(err => {
      users.render(req, res, err.message || err);
    });
  }
});

router.get('/logout', function(req, res, next){

	delete req.session.user;

	res.redirect('users/login');
});

module.exports = router;