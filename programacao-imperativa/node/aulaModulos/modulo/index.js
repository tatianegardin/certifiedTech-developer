let  clientes = []

function Banco (numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular

    
}

function criandoClientes(numero, tipo, saldo, nome){
    let cliente  = new Banco(numero, tipo, saldo, nome)
    clientes.push(cliente)

    
}


criandoClientes(5486273622, "corrente", 277.71, "Abigael Natte"); 
criandoClientes(1183971869, "poupança", 86.75, "Ramon Connell");
criandoClientes(9582019689, "poupança", 273.63, "Jarret Lafuente");
criandoClientes(1761924656, "poupança", 324.15, "Ansel Ardley");
criandoClientes(7401971607, "poupança", 187.89, "Jacki Shurmer");
criandoClientes(630841470, "corrente", 287.76, "Jobi Mawtus");
criandoClientes(4223508636, "corrente", 21.77, "Thomasin Latour");
criandoClientes(185979521, "poupança", 259.94, "Lonnie Verheijden");
criandoClientes(3151956165, "corrente", 76.01, "Alonso Wannan");
criandoClientes(2138105881, "poupança", 331.96, "Bendite Huggett");



module.exports = clientes ;