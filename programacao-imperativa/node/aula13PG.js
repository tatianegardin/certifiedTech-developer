let loja = []





function Carro (marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}


loja.push(new Carro("toyota", "yaris"))

loja.push(new Carro("chevrolet", "classic"))

loja.push(new Carro("toyota", "SW4"))

function consultarCarro(modelo){
    for (let i = 0; i < loja.length ; i++){
        if (loja[i].modelo = modelo ){
            return (loja[i])

        }
    }
}



console.log(consultarCarro("classic"))

