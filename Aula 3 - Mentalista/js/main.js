var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

function Chutar(){
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);  // criando uma variável para referenciar o valor passado no input
    console.log(chute);
    if (chute == numeroSecreto){
        // console.log("acertou")
        elementoResultado.innerHTML = "Você acertou, YAY!"
    } else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!"
        // console.log("Você deve digitar um número de 0 a 10!")
    } else {
        elementoResultado.innerHTML = "Poxa, você errou. Tente novamente!"
        // console.log("errou")
    }
}