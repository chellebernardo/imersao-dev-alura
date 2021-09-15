function Converter(){
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    console.log(valor);
    var valorEmDolar = parseFloat(valor); //parse transforma String para número inteiro ou decimal

    var valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'O valor em real é R$ ' + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido
}