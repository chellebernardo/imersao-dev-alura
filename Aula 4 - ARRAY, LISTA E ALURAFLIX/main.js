// var filme1 = "Yesterday"
// var filme2 = "A chegada"
// var filme3 = "Escola de Rock"

// var listaFilmes = ["Yesterday","A chegada", "Escola de Rock"];

// listaFilmes.push("Reri Poti 1");
// listaFilmes.push("Reri Poti 2");
// listaFilmes.push("Reri Poti 3");

// console.log(listaFilmes.length);

// for( var i = 0; i < listaFilmes.length; i++) {
//     document.write("<p>"+listaFilmes[i]+"</p>");
// }

var listaFilmes = ['https://cdn-cosmos.bluesoft.com.br/products/891705427786', 'https://br.web.img3.acsta.net/pictures/16/12/21/20/45/071675.jpg', 'https://br.web.img2.acsta.net/medias/nmedia/18/87/36/77/20028823.jpg', 'https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg', 'https://i.pinimg.com/originals/6e/8a/68/6e8a687e4118c0d6521f42e25f3c1427.jpg', 'https://photos.enjoei.com.br/friends-poster-moldura-a4/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy80ODMzODc3LzliOTRlZjJkMTg3OTA5MGE0ODdjNjljMGFmZmYwODk0LmpwZw', 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/09/show_asset_01a7442c-6517-4db8-ab6d-04c95e868374_FULL.jpg', 'https://m.media-amazon.com/images/I/81PLGFVI87L._AC_SY679_.jpg', 'https://starving.com.br/wp-content/uploads/2015/12/0b1962014151cede79f9304fc0217c0a.jpg', 'https://i.pinimg.com/736x/c4/3e/3e/c43e3e9868911b4632face88f9da8f69.jpg']

for( var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src="+listaFilmes[i]+">");
};

console.log(listaFilmes.length);