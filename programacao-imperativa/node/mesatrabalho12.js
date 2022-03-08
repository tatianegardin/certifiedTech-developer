const alice = [23, 82, 46, 35]; // cada posição do array do participante é o RESULTADO de uma rodada votação
const bob = [45, 82, 32, 44];



let pontosParticipanteA = 0; // participante a = parâmetro a
let pontosParticipanteB = 0; // participante b = parâmetro b

function encontrarGanhador(a, b) { 
        let xpto = a.length
    for (let i = 0 ; i <= xpto; i++) {
        
        if (a[i] > b[i]){
            pontosParticipanteA++ ;
        }else if (a[i] < b[i]) {
            pontosParticipanteB++ ;
        }else {
            continue
        }
    } 
    if(pontosParticipanteA < pontosParticipanteB){
        return ("jogador 2" + ": " + pontosParticipanteB + " pontos")
    }else if(pontosParticipanteA > pontosParticipanteB){
        return ("jogador 1" + ": " +pontosParticipanteA + " pontos")
    }else {
        return "nenhum, deu empate"
    }
    
    }
   
console.log("o ganhador é: " + encontrarGanhador(alice,bob))


let contador = 1; // iniciei de 1
let numeros = []; 


function digitalHouse(a, b)  {
    do {
        numeros.push(contador); 

        contador++; 
    } while (contador <= 100); 

    let xpto = numeros.length
    
    for (let i = 0 ; i < xpto ; i++){
        contador = " "
        let printN = true

        if (numeros[i] % a == 0){
            contador = "Digital";
            printN = false;
        }
        if (numeros[i] % b == 0 ){
            contador = "House";
            printN = false;
        }
        if (numeros[i] % a == 0 && numeros[i] % b  == 0){
            contador = "Digital House";
            printN = false;
        }
        if (printN){
            contador = numeros[i]
        }
        console.log(numeros[i] + " " + contador)

    }
    
}

digitalHouse(2,5)