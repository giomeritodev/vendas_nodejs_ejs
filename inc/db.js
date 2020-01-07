const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'giogiu',
    database: 'bem_mais_db'
});

connection.connect(err => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Conectado...");
        tablePedidos(connection);
    }
});

function tablePedidos(conn){
    conn.query(`
    create table if not exists tb_pedidos(
        ped_id integer primary key auto_increment,
        cliente_id int not null,
        produto_id int not null,
        ped_qtd int not null default 1,
        ped_status varchar(100) default "pendente",
        createdAt datetime default now()
    );
`, (err, results) => {
        if(err){
            console.log(err.message);
        }else{
            console.log(results);
        }
    });
}


module.exports = connection;