// Loop de Pares
// O QUE É UM LOOP: LAÇO DE REPETIÇÃO

// Você deve criar uma função chamada loopDePares que receba um número como parâmetro 
// e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o (número da iteração somado com o número passado pelo parâmetro) seja par (% == 0),
// aparecerá no console: "O número x é par"

function loopDePares(numero) {
    for (let i = 0; i < 100; i++){

        if((i+numero) % 2  == 0){
            console.log(`O número ${numero + i} é par` )
        }else {
            console.log(i)
        }
    }
}
loopDePares(2)

// Lidando com dois arrays
// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como
// parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á

function arrayHandler(array1, array2) {

    if(array1.length == array2.length){
        let xpto = array1.length
        for (let i = 1; i <= xpto; i++ ){
            console.log(`Eu sou o ${array1.shift()} e eu sou o ${array2.shift()}`)
          
        }

    }else{
        console.log("o tamanho é diferente e não faz a ação da função")
    }

}


arrayHandler([1, 2, 3, 4], ["o", "l", "á"]);

