// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.


let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16] ; 

let numerosImpares = numerosPares.map(function(valor){
    return valor - 1;
});


console.log(numerosImpares);


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = [ 'Tatiane', 'Maria', 'Lucas', 'Ilza', 'Bryan', 'Maria'];

let nomesFilter = nomes.filter(function(valor, ){
    return valor == "Maria" ;
});

console.log(nomesFilter)