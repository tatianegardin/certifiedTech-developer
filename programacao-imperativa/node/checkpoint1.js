let resultado = ""
let tempopadrao = ""
let tempopadraob = ""



function tempos(tempo,tempoP){
    if (tempo >= tempoP * 3 ) {
        resultado = "KABUM";
    }else if (tempo >= tempoP * 2 ) {
        resultado = "Sua comida queimou" ;
    }else if (tempo < tempoP) {
        resultado = "Tempo insuficiente";
    }else if (tempo >= tempopadrao) {
        resultado = "Prato pronto, bom apetite!!!";
    }else {
        resultado = "Erro, tempo inválido"
    }
    return resultado

}





function microondas(prato, tempo) {
    
    switch (prato) {
    case  1  :
        tempopadrao = 10
        resultado = tempos(tempo, tempopadrao)
    break;
    case  2  :
        tempopadrao = 8
        resultado = tempos(tempo, tempopadrao)
    break;
    case  3  :
        tempopadrao = 15
        resultado = tempos(tempo, tempopadrao)
    break;
    case 4  :
        tempopadrao = 12
        resultado = tempos(tempo, tempopadrao)
    break;
    case  5  :
        tempopadraob = 8
        resultado = tempos(tempo, tempopadraob)

    break;
    default:
        resultado ="Prato inexistente"
    break;
    }
   return(resultado)

}

console.log(microondas(1,15))

console.log(microondas(2,50))

console.log(microondas(3,2))

console.log(microondas(8,15))


