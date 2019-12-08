// ARREGLOS
//1 Elemento (Variable constante numero = 1)
// Conjunto del mismo elemento ( [1,2,3,4,5])
// Conjunto diferentes elementos ([1,"abc, true"])
const arreglosNumeros = [1, 2, 3, 4, 5];
// REASIGNAR -> MUTABLE

arreglosNumeros.push(6);
console.log('arreglosNumeros', arreglosNumeros);
arreglosNumeros.pop();
console.log('arreglosNumeros', arreglosNumeros);

// Acceder elementos del arreglo por indice 
const indiceElementoUno = 0;
arreglosNumeros[indiceElementoUno]; // 1
const indiceElementoCinco = 4;
arreglosNumeros[indiceElementoCinco]; // 5
arreglosNumeros[4]; //5

// Acceder al elemento 5
// 1) INDICE
// [1, 2, 3, 4, 5]
//  0  1  2  3  4
//    INDICES
console.log(arreglosNumeros[indiceElementoCinco]);
console.log(arreglosNumeros[4]);
// 5

// 1) Crear arreglo de 5 elementos
const arrreglo = [];
// 2) Cada elemento 1 o un 0
// Ej: [0, 0, 1, 1, 0]
// 3) Existe un elemento 1
// Ej: [0, 0, 0, 0, 0] no valido
// Ej: [0, 0, 0, 0, 1] valido

Math.floor(Math.random()*2) // [0 , 2[
Math.floor(Math.random()*10) // [0 , 11[

//ARREGLO
// 1) ELEMENTOS
// 2) INDICES ( 0 Index based) -> POSICION
// 3) LONGITUD -> # ELEMENTOS
console.log(arreglosNumeros.length);


// FOR
// 1) let tamaño = arreglosNumeros.length // 5
// 2) tamaño > 0
// 3) --


