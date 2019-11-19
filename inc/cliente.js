const conn = require('./db');
const admin = require('./admin');

module.exports = {

	render(req, res, error, success){

		conn.query('SELECT * FROM tb_clientes ORDER BY id', (err, results) => {
    		
    		if(err){
      			console.log(err);
    		}

			res.render('inc/pages/clientes', admin.getParams(req, { 
	      		title: 'Clientes',
	      		body: req.body,
	      		error,
	      		success,
	      		clientes: results	      
	    	}));	    	
    	});	
	},

	save(fields){


		return new Promise((resolve, reject) => {

			//let date = fields.date.split("/");
			//fields.date = `${date[2]}-${date[1]}-${date[0]}`;
			conn.query(`
				INSERT INTO tb_clientes (nome, email, telefone)
				VALUES(?, ?, ?);
			`, [
				fields.nome,
				fields.email,
				fields.telefone
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