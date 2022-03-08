// let print =  () => "ola mundo";

// console.log(print()) ;

// let somar = (a,b) => a + b ;

// console.log(somar(10,10));


// let atividade = (numero1, numero2)=>{
//     for(let i = 0 ; i<100 ; i++){
//         if (i%numero1 && i%numero2 == 0 ){
//             return "FizzBuzz"
//         }if else ( i%numero1 == 0 ); {
//             return "fizz"
//         }if else (i%numero2 == 0 );{
//             return "buzz"
//         }
//     }
// }


// console.log(atividade(2,5));



// function multiplos(numero1, numero2){
//     for(let i = 0 ; i < 100 ; i++){
//         var resultado = ''
//         if ( i%numero1 == 0 ) {
//             resultado = "fizz"
//         }
//         if ( i%numero2 == 0 ) {
//              resultado = "buzz" }

//         if (i%numero1 == 0  && i%numero2 == 0 ){
//             resultado = "FizzBuzz";
  
//         }
//         if ( resultado == ""){
//             continue
//         }else{
//         console.log(resultado + i )
//         }
//     } 

// }

// console.log(multiplos(2,5));




let atividade = (numero1, numero2) =>{
    for(let i = 1 ; i < 100 ; i++){

        if (i%numero1 == 0 && i%numero2 == 0 ){
            console.log(i + ": " + "FizzBuzz");
        
        }else if ( i%numero2 == 0 ) {
            console.log (i + ": " + "buzz" );

        }else  if ( i%numero1 == 0 ) {
            console.log (i + ": " + "fizz");

        }else {
            console.log(i + ": " + "não se aplica na regra.");
        }
    } 
}

console.log(atividade(2,5))