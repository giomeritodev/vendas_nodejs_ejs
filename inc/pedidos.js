const conn = require('./db');
const admin = require('./admin');

module.exports = {        
	render(req, res, error, success){
		conn.query(
			`		
				SELECT * FROM tb_pedidos ORDER BY id
		
			`, (err, results) => {
			if(err){
				console.log(err);
			}
			res.render('inc/pages/pedidos', admin.getParams(req, {
				title: 'Pedidos',
				body: req.body,
				error,
				success,
				pedidos: results
			}));
		});

	},

	save(fields){
		return new Promise((resolve, reject) => {
			conn.query(
				`
					INSERT INTO tb_pedidos(cliente_id, produto_id, ped_qtd, ped_status)
					VALUES(?, ?, ?, ?)
				`, [
					fields.cliente_id,
					fields.produto_id,
					fields.ped_qtd,
                    fields.ped_status
				], (err, results) => {
					if(err){
						reject(err);
					}else{
						resolve(results);
					}
				});
		});
	},

	findCliente(id){
        conn.query(`SELECT * FROM tb_clientes WHERE id = ${id}`,
            (err, result) => {
                if(err){
                    console.log(err);
                }
                console.log(result);
            }
        );
	}
}