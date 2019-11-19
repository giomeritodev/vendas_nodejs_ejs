const express = require('express');
const router = express.Router();

const clientes = require('./../inc/cliente');

router.get('/', function(req, res, next) {      
    clientes.render(req, res, null, null);
});

router.post('/', function(req, res, next) {

    if(!req.body.nome){
      clientes.render(req, res, "Informe um nome");
    } else if(!req.body.email){
      clientes.render(req, res, "Informe um email");
    } else if(!req.body.telefone){
      clientes.render(req, res, "Informe um telefone");
    }else{

      clientes.save(req.body).then(results => {

        clientes.render(req, res, null, `O cliente ${req.body.nome} foi cadastrado!`);
        req.body = {};

      }).catch(err => {
        clientes.render(req, res, err.message);
      });
    }
});


module.exports = router;