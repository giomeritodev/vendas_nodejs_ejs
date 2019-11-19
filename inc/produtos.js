const conn = require('./db');
const admin = require('./admin');


module.exports = {

	render(req, res, error, success){

		conn.query(
			`SELECT * FROM tb_produtos ORDER BY id`, (err, results) => {
				if(err){
					console.log(err);
				}

				res.render('./inc/pages/produtos', admin.getParams(req, {
					title: 'Produtos',
					body: req.body,
					error,
					success,
					produtos: results
				}));
			}
		);
	},

	save(fields){
	
		return new Promise((resolve, reject) => {
			
			conn.query(`
				INSERT INTO tb_produtos (descricao, preco)
				VALUES(?, ?);
			`, [
				fields.descricao,
				fields.preco
			], (err, results) => {
				if(err){
					reject(err);
				}else{
					resolve(results);
				}
			});			
		});
	}
}