const conn = require('./db');

module.exports = {

    dashboard(){
        return new Promise((resolve, reject) => {
            conn.query(`
                select 
                (select count(*) from tb_clientes) AS nrclientes,
                (select count(*) from tb_usuarios) AS nrusuarios,
                (select count(*) from tb_produtos) AS nrprodutos
            `, (err, results) => {
                if(err){
                    reject(err);
                }else{
                    resolve(results[0]);
                }
            });
        });
    },

    getParams(req, params){

        return Object.assign({}, {
            user: req.session.user,
            menus: req.menus
        }, params);
    },

    getMenus(req){
        let menus = [
            {
                text: "Home",
                href: "/",
                icon: "",
                active: false
            },
            {
                text: "Clientes",
                href: "/clientes",
                icon: "",
                active: false
            },
            {
                text: "Produtos",
                href: "/produtos",
                icon: "",
                active: false
            },
            {
                text: "Pedidos",
                href: "/pedidos",
                icon: "",
                active: false
            },
            {
                text: "PDV",
                href: "/pdv",
                icon: "",
                active: false
            },
            {
                text: "Caixa",
                href: "/caixa",
                icon: "",
                active: false
            },
            {
                text: "Orçamentos",
                href: "/orcamentos",
                icon: "",
                active: false
            }
        ];
        //para ficar selecionado a pagina que estiver em uso
        menus.map(menu => {

            if(menu.href === `${menu.url}`) menu.active = true;
        });

        return menus;
    }

}