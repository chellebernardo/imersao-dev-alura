function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;

    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png") || filmeFavorito.endsWith(".gif" || filmeFavorito.endsWith(".jpeg"))){
        listarFilmes(filmeFavorito);
    } else {
        console.error('Url inválida!')
        alert("A url informada não é válida!")
    }

    document.getElementById("filme").value = "";
    // console.log(filmeFavorito);
}

function listarFilmes(filme){
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}