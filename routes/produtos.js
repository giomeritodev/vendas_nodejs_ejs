const express = require('express');
const router = express.Router();

const produtos = require('./../inc/produtos');


router.get('/', (req, res, next) => {
	produtos.render(req, res, null, null);
});


router.post('/', (req, res, next) => {

	if(!req.body.descricao){
		produtos.render(req, res, "Informe a descrição do item");
	}else if(!req.body.preco){
		produtos.render(req, res, "Informe um preço para o item");
	}else{
		
		produtos.save(req.body).then(results => {

			produtos.render(req, res, null, `O item (" ${req.body.descricao} ") foi adicionado!`);	
			req.body = {};

		}).catch(err => {			
			produtos.save(req, res, err.message);
		});
	}

});


module.exports = router;