
// suma
//resultado = 1 + 2;
//restar 
//resultado = 1 - 2;
//multiplicación
//resultado = 1 * 2;
//dividir
//resultado = 1/2;
//exponencial
//resultado = 1^2;
// MOD 
//resultado = 4 % 2; //0 -> residuo
//resultado = 4 % 3; //1 -> residuo
//resultado = 4 % 3; //1 -> residuo
console.log("pera" + 2);




// strings 
const mensaje = "\"hola mundo\"";
const saludo  = '\'adio\s mundo\'';
console.log(mensaje + "1\t\t\t 222\r\r\r 3\n" + saludo);
// template strings
const edad = 30;
const saludoEdad = `Mi edad es: \n${edad}`;
const saludoCompleto = `que fuefs: ${saludo}\n${mensaje}`;
console.log(saludoCompleto);
// Contamos los elementos
const nombreLongitud = "Vicente Adrian";
console.log(nombreLongitud.length);
// Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
// Cambiar a mayúsculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
//console.log(nombreLongitud.replace("e","o"));
//console.log(nombreLongitud.replace("a","o"));
//console.log(nombreLongitud.replace("\n",""));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("z")); // -1
console.log(nombreLongitud.search("adrian")); //
console.log(nombreLongitud.slice(0,7)); // muestra un pedazo del string
console.log(nombreLongitud.indexOf("x"));// posicion incluido el espacio
console.log(nombreLongitud.includes(""));// booleano
console.log(nombreLongitud.includes("x"));// booleano
console.log(nombreLongitud.endsWith("x"));
console.log(nombreLongitud.startsWith("Vice"));
console.log(nombreLongitud.substring(0,6));
// cuantas letras tiene mi nombre
// cuantas consinantes y vocales tiene mi nombre