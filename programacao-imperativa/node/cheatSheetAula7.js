
/*====================
ATRIBUIÇÃO
===================*/

// O operador "=" serve para atribuir o alor 40 a uma variável chamada "idade"

let idade = 40

/*====================
ARITMÉTICOS
===================*/

// Nos permitem fazer operações matemáticas 

10 + 15 //----> Soma 
10 - 15 //----> Subtração 
10 * 15 //----> Multiplicação
10 / 15 //----> Divisão
15++    //----> Incremento de um em um = 15 + 1 
15--    //----> Decremento de um em um = 15 - 1 
15 % 5  //----> Módulo. O resto obtido da divisão de 15 por 5 : 0 
15 % 2  //----> Módulo. O resto obtido da divisão de 15 por 2 : 1


/*====================
COMPARAÇÃO SIMPLES
===================*/

// Comparam dois valores, devolvem verdadeiro ou falso 

10 == 15 // Igualdade ---> false
10 != 15 // Desigualdade ---> true


/*====================
COMPARAÇÃO ESTRITA
===================*/

//Comparam o valor e o tipo de dado também.


10 === "10" // Igualdade estrita ---> false
10 !== 15 // Desigualdade estrita ---> true

/*====================
OPERADORES RELACIONAIS
===================*/

15 > 15 // Maior que ---> false
15 >= 15 // Maior ou igual a ---> true
10 < 15 // Menor que ---> true.
10 <= 15 // Menor ou igual a ---> true.

/*====================
OPERADORES lógicos 
===================*/

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano 

// AND (&&) ---> todos os valores devem ser avaliados como verdadeiro 

(10 > 15) && (10 != 24) // false
(10 == 10) && (11 > 10) // true

// OR (||) ---> ao menos um valor deve ser avaliado como true para q o resultado seja true 

(10 > 15) && (10 != 24) // true
(10 != 10) && (11 < 10) // false

// NOT (!) ---> Nega a condição. Se era true, sera false e vice-versa. 

!false // true
!(20 > 15) // false

