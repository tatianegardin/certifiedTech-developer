let filmes = ["sempre ao seu lado", "se eu fosse você", "patralha canina", "ps, eu te amo"]

let numeros = [ 1, 2, 3, 4, 5, 6, 7]

let compras = ["banana","arroz", "macarrão", "bolacha" ]


let separados = compras.join("*")

console.log (separados)

// Join modifica o separador dos dados dentro de um array

console.log(numeros)

console.log(numeros.pop())

console.log(numeros)


// .pop é usado para eliminar o ultimo dado dentro de um array, e ele retorna esse dado

console.log(filmes)

console.log(filmes.shift())

console.log(filmes)


// .shift é usado para eliminar o primeiro dado dentro de um array, e ele retorna esse dado 

filmes.unshift("matrix")

console.log(filmes)

// .unshift adiciona um ou mais dados no inicio de um array

filmes.push("a procura da felicidade")
console.log(filmes)


// .push adiciona um dado no final do array

