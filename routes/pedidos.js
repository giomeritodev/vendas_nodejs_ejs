const express = require('express');
const router = express.Router();

const pedidos = require('./../inc/pedidos');

router.get('/', (req, res, next) => {
	pedidos.render(req, res);
	pedidos.findCliente(req.body.cliente_id);
});

module.exports = router;