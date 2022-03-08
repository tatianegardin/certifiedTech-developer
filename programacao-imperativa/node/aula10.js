// // let meuNome = ['meu', 'nome', 'é', 'Tatiane'];

// // let minhaIdade = ['eu', 'tenho', '24', 'anos']

// // console.log(meuNome)

// // // Acessar elementos específicos de um array.

// // console.log(meuNome[3]) ;

// // //Modificar cada um dos elementos de um array e imprimi-los no console.

// // meuNome.splice( 0, 4, 'minha', 'idade', 'é', '23');

// // console.log(meuNome) ;


// // //Adicionar elementos a um array.

// // meuNome.push("anos");

// // console.log(meuNome)

// // //Extrair elementos de um array.

// // meuNome.pop()

// // console.log(meuNome)

// // //Comparar elementos de um array com os elementos de outro.

// // //Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

// // let array2 = [1, 2, 3, 4, 5]

// // function somarArray(array){
// //         let xpto = array.length
// //     for ( let i = 0; i < xpto ; i++){
// //         let resultado = 0
// //         resultado = resultado + (array.pop())
// //     }
// //     return resultado

// // }


// // console.log(somarArray(array2))

// // Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// // Importante: Não poderá utilizar o método Array.join() original.
// // Por exemplo:
// // join(["o","l","á"]) deve retornar a string "olá".
// // join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

let ola = ["o", "l", "a"]


let arrayJson = JSON.stringify(ola)

console.log(arrayJson)



// function meujoin(array){
//     let resultado
//     let convert = array.toString() 
//     resultado = convert.replace(/,/g, '')
//     return resultado
    
// }

// let tchau = ['t', 'c', 'h', 'a', 'u']

// console.log(meujoin(tchau))




// // Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// // Dica: revise o que faz o método de strings .toUpperCase().



// let filmesAula = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

// function maiuscula(array){
//      return array.shift().toUpperCase() +", " + array.shift().toUpperCase() +", "+ array.shift().toUpperCase() + ", "+ array.shift().toUpperCase() + ", " + array.shift().toUpperCase();
    
// }


// console.log(maiuscula(filmesAula))




// // Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
// //     "Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
// // Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.


// let filmes3 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]



// function juncao(array1,array2){
    
//     array1.push(array2.pop())
//     array1.push(array2.pop())
//     array1.push(array2.pop())
//     array1.push(array2.pop())
//     array1.push(array2.pop())
//     return array1
// }

// console.log(juncao(filmesAula, filmes3))



