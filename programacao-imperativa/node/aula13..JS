let banco = {
    numero: 123565,
    tipo: "corrente",
    saldo: 1000.00,
    titular: "Tatiane Lacerda Gardin",
}


console.log(banco)

function Banco (numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular

    
}




let  clientes = []


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

console.log(clientes)




function consultarClientes(nome){
    for (let i = 0; i < clientes.length; i++){
        if (clientes[i].titular == nome){
            return clientes[i];
        }
    }
}

console.log(consultarClientes("Bendite Huggett"))

// 7.	Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .

function deposito(titular,valor){
    for (let i = 0; i < clientes.length; i++){
        if (clientes[i].titular == titular){
            let resultado = clientes[i].saldo + valor
            clientes[i].saldo = resultado

            return "Depósito realizado, seu novo saldo é: " + clientes[i].saldo
        }
    }
}

console.log(deposito("Bendite Huggett", 100))



// 8.	Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"



function saque(titular,valor){
    for (let i of clientes) {
        if(i.titular == titular){
            let resultado = i.saldo - valor
                if(valor > i.saldo){
                    return "Saldo insuficiente"
                }else {
                    i.saldo = resultado
                    return "Extração feita com sucesso, seu novo saldo é: " + i.saldo
                }
        }
    }
}



console.log(saque("Jarret Lafuente", 100))




function Alunos(nome, registro, notas){
    this.nome = nome;
    this.registro = registro;
    this.notas = notas;
}

let cadAlunos = []


function adicionandoAluno(nome, registro, notas){
    let cadastroAlunos = new Alunos(nome, registro, notas)
    cadAlunos.push(cadastroAlunos)
}

adicionandoAluno("tatiane", 12134542, [10,5,8,9])

console.log(cadAlunos)


// function media(nome){
//     for(let i of cadAlunos){
//         let divisor = i.notas.length 
//             for(let i of notas)
//     }
// }

