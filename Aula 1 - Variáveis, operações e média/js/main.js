var nome = prompt ('Qual seu lindo nome?')
var nota1 = 9
var nota2 = 7
var nota3 = 4
var nota4 = 2

var notaFinal = (nota1+nota2+nota3+nota4)/4

var notaFixa = notaFinal.toFixed(1) //Para arredondar a nota utilizando a quantidade de casas decimais que queres utilizar após a virgula.

console.log('Seja bem vinde ' + nome + '!')
// console.log('Sua nota do primeiro bimestre é: ' + notaPrimeiroBimestre)
console.log('Sua nota final é: '+notaFixa)