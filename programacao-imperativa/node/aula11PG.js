// Repetir como um papagaio
console.log("-------Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.")


for (let i = 1; i<=5; i++) {
    console.log("Olá mundo!")
}

console.log("-----Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.")

for (let i = 0; i<=10; i++) {
    if ((i%2) != 0) {
        console.log (i)
    }
}


console.log("-----Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).")

for (let i=0 ; i<=10 ; i++) {
    console.log(i*7)
}

console.log("Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.")

let i=0

while(i <= 100) {
    if ((i%2 !=0)){
        console.log(i);
    }
    i++
}


console.log("Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.")

let b = 0 

while(b <= 100) {
    if ((b%2 == 0)){
        console.log(b);
    }
    b++
}


console.log("Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.")


function separados(a) {
    let c = 1
        while(c <= a ){
            if ((c%2) == 0 ){
            console.log(c);}

            c++
            
        }
}     
  

 

separados(10)