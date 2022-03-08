

let resultado = ""

function podeSubir(altura) {

    if (altura >= 1.40 && altura <= 2.00){
        resultado = "Acesso autorizado" ;

    } else if (altura < 1.40 && altura > 1.20) {
        resultado = "Acesso autorizado somente com acompanhante";

    } else if (altura < 1.20) {
        resultado = "Acesso negado!";
    }else {
        resultado = "num cabe"
    }
    return resultado
}

console.log (podeSubir(1.19))

