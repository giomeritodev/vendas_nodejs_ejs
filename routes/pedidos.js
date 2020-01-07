const express = require('express');
const router = express.Router();

const pedidos = require('./../inc/pedidos');

router.get('/', (req, res, next) => {
	pedidos.render(req, res);
	pedidos.findCliente(req.body.cliente_id);
});

router.post('/', (req, res) => {
    pedidos.save(req.body).then(results => {
        res.render(req, res, null, "Cadastro efetuado");
    }).catch((err) => {
        res.render(req, res, "Erro ao criar o cadastro");
    });
});

module.exports = router;