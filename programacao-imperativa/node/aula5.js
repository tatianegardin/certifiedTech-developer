//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polegadas(p){
    return p * 2.54
}
    console.log(polegadas(30))

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function URL(string){
    return ("http://www."+string+".com.br")
}
    console.log(URL("tatiane"))

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function frase(string) {
    return (string + "!")
}
    console.log(frase("tatiane"))

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorro(x){
    return x * 7
}
    console.log(idadeCachorro(3))

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.

function salario(x) {
    return x/160
}
console.log(salario(1100.00))

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function IMC(a,p) {
    return (p /(a*a)).toFixed(2);
}
console.log(IMC(1.63,68))

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

function minuscula(string) {
    return string.toUpperCase()
}

console.log(minuscula("tatiane"))

//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipoDeDado(d){
    return (typeof d)
}
console.log(tipoDeDado(1.2))

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function raio(x) {
    return (2 * Math.PI * x ).toFixed(2);
}
console.log(raio(2))