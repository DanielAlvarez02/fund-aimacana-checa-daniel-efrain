const arregloNumeros = [1,2,3,4,5,9,6,7,8,9,10];

//ACCEDER
//NECESITO : INDICE
console.log(arregloNumeros[6]);//7
//ANADIR AL FINAL
//NECESITO : ELEMENTO ANADIRSE
arregloNumeros.push(11);
//BORRAR AL FINAL
arregloNumeros.pop();
//ANADIR EN UN INDICE 
//NECESITO: INDICE
// ELEMENTO
arregloNumeros.splice(0, 0, 1.2);
console.log(arregloNumeros);
// O BORRAR
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
//BUSCAR EL INDICE DE UN ELEMENTO! :D
arregloNumeros.indexOf(5); // 5
console.log(arregloNumeros.indexOf(5));
arregloNumeros.indexOf(7);
console.log(arregloNumeros.indexOf(7));

arregloNumeros[0] = 999;
console.log(arregloNumeros);


