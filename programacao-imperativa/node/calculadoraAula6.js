function adicao(a,b){
    return a+b;
}

function subtracao(a,b){
    return a-b ;
}

function multiplicacao(a,b) {
    return a*b ;
}

function divisao(a,b){
    return a/b ;
}

console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log("Teste adição = "+ adicao(5,5))
console.log("Teste subtração = "+ subtracao(5,3))
console.log("Teste multiplição = "+ multiplicacao(10,10))
console.log("Teste divisão = "+ divisao(20,4))
console.log("Teste divisão = "+ divisao(20,0))



function quadradoDoNumero(a) {
    return multiplicacao(a,a)
}

console.log(quadradoDoNumero(5))



function mediaDeTresNumeros(a,b,c){
    let primeiraSoma = adicao(a,b)
    return divisao (adicao(primeiraSoma,c),3)
}

console.log(mediaDeTresNumeros(5,6,7))



function calculaPorcentagem(t,p){
    return multiplicacao(t,divisao(p,100))
}

console.log(calculaPorcentagem(300,15))



function geradorDePorcentagem(a,b){
    return divisao(multiplicacao(a,100),b)
}

console.log(geradorDePorcentagem(40,160))