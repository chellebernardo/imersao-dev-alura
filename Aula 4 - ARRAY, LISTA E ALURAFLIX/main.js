// var filme1 = "Yesterday"
// var filme2 = "A chegada"
// var filme3 = "Escola de Rock"

// var listaFilmes = ["Yesterday","A chegada", "Escola de Rock"]

// listaFilmes.push("Reri Poti") //para acrescentar pushar no final da lista
// //listaFilmes.pop ("Reri Poti") //para excluir do final da lista

// document.write("<p>"+listaFilmes[0]+"</p>");
// document.write("<p>"+listaFilmes[1]+"</p>");
// document.write("<p>"+listaFilmes[2]+"</p>");
// document.write("<p>"+listaFilmes[3]+"</p>");

var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/78/50_First_Dates_P%C3%B4ster.jpg","https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg", "https://br.web.img3.acsta.net/pictures/16/12/21/20/45/071675.jpg", "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg", "https://static.wikia.nocookie.net/disney/images/9/9d/Pocahontas_poster.png/revision/latest?cb=20150916222413&path-prefix=pt-br", "https://static.wikia.nocookie.net/disney/images/e/e8/Mulan_-_P%C3%B4ster_Nacional.jpg/revision/latest?cb=20180606201029&path-prefix=pt-br", "https://static.wikia.nocookie.net/disneyprincesas/images/8/8c/Valente.jpg/revision/latest?cb=20140105013031&path-prefix=pt-br"]

for (var i=0; i<listaFilmes.length; i++){
    document.write("<img src="+listaFilmes[i]+">")
}