const conn = require('./db');

module.exports = {

    render(req, res, error){

        res.render('login', {
            body: req.body,
            error
        });

    },

    login(email, password){
        
        return new Promise((resolve, reject) => {

            conn.query(`
                select * from tb_usuarios where email = ?
            `, [
                email
            ], (err, results) => {
                if(err){
                    reject(err);
                }else{
                    if(!results.length > 0){
                        reject("Usuário não encontrado");
                    }else{
                        let row = results[0];

                        if(row.password !== password){
                            reject("Senha não confere");
                        }else{
                            resolve(row);
                        }
                    }
                }
            });
        });
    }
}