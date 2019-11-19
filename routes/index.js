const conn = require('./../inc/db');
const admin = require('./../inc/admin');

var express = require('express');
var router = express.Router();



//Middleware para pegar usuario logado
router.use(function(req, res, next){

  if(['/users/login'].indexOf(req.url) === -1 && !req.session.user){
    res.redirect('/users/login');
  }else{
    next();
  }
  
  //console.log(req.session.user);

});

router.use(function(req, res, next){
  req.menus = admin.getMenus(req);
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
 
  admin.dashboard().then(data => {
    
    res.render('index', admin.getParams(req, {
      title: 'Home - Bem + Sorvetes',
      data
    }));      
  }).catch(err => {
    console.log(err);
  });

 
});

router.get('/caixa', function(req, res, next) {
  res.render('inc/pages/caixa', admin.getParams(req, { title: 'Caixa - Bem + Sorvetes' }));
});

router.get('/orcamentos', function(req, res, next) {
  res.render('inc/pages/orcamentos', admin.getParams(req, { 
    title: 'Orçamento - Bem + Sorvetes' 
  }));
});


router.get('/pdv', function(req, res, next) {
  res.render('inc/pages/pdv', admin.getParams(req, { title: 'Clientes - Bem + Sorvetes' }));
});

module.exports = router;
