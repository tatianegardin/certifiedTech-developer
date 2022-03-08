let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

let filmes2 = ["um amor para recordar", "para sempre ao seu lado", "como se eu fosse você", "de repente 30"]
// let a = 0


// function converterMaiuscula(array) {
//     for (let i = 0 ; i < array.length ; i++ ){
//         array[i] = array[i].toUpperCase()
//     }
//     return array
// }

// console.log(converterMaiuscula(filmes))

// function pasajeDeElementos(array1, array2) {
//     array1.push(array2.pop().  toUpperCase())
//     array1.push(array2.pop(). toUpperCase())
//     array1.push(array2.pop(). toUpperCase())
//     array1.push(array2.pop(). toUpperCase())
//     array1.push(array2.pop(). toUpperCase())
//     array de retorno1
// }

function teste(array1,array2){
    let xpto = array2.length
    for (let i = 0 ; i < xpto ; i++ ){
        console.log(i)
        console.log(array2.length + "aqui")
        array1.push(array2.pop().toUpperCase())
    }
    return array1
    }


console.log(teste(filmes,filmes2))