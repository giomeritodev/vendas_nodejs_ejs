$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

closeModal = () => {
    document.getElementById('form_cad_clientes').style.display = 'none';
}

[...document.querySelectorAll('.btn-update')].forEach(btn => {

    btn.addEventListener('click', e => {

        let tr = e.path.find(el => {
        	return(el.tagName.toUpperCase() === 'TR');
        });

	    let data = JSON.parse(tr.dataset.row);

	    console.log(data);

    });
});


viewCadastro = (form, lista) => {    
    document.getElementById(`${form}`).style.display = 'block';
    document.getElementById(`${lista}`).style.display = 'none'; 
}

viewLista = (form, lista) => {
    document.getElementById(`${form}`).style.display = 'none';
    document.getElementById(`${lista}`).style.display = 'block'; 
}
