//04-condicionales.ts
var casado = true;
if (casado == true) {
    console.log("si estoy casado");
}
else {
    console.log("no estoy casado");
}
if (casado == false) {
    console.log("si estoy casado");
}
else {
    console.log("no estoy casado");
}
if (casado != true) {
    console.log("No estoy casado");
}
else {
    console.log("Si estoy casado");
}
if (casado != false) {
    console.log("Si estoy casado");
}
else {
    console.log("No estoy casado");
}
var tengoMosa = true;
var estaCasado = casado == true; // expresion
var soyMosero = tengoMosa == true; //
var casadoYMosero = estaCasado &&
;
if (estaCasado == true && tengoMosa == true) {
    console.log("Cassado y mosero");
}
else {
    console.log("O casado O Mosero o Nada");
}
// casadoYMOsero <=> c==true && b==true && d==true
// AND -> && AMPERSON
// TRUE Y TRUE = TRUE 
// TRUE Y FALSE = FALSE
// FALSE Y TRUE = FALSE 
// FALSE Y FALSE = FALSE
// OR -> || -> PIPES 
// TRUE Y TRUE = TRUE 
// TRUE Y FALSE = TRUE
// FALSE Y TRUE = TRUE  
// FALSE Y FALSE = FALSE
// apago la primera alarma me hago
// bolita y lloro hasta la segunda
// alarma y me levanto
// celularDescargado ==true
// amaneceMuerto  == true
// estaActivadaLaAlarma != true
// estaEnModoSilencio == true
// const seAtrasoAClase = celularDescargado ==true || amaneceMuerto  == true || estaActivadaLaAlarma != true|| estaActivadaLaAlarma != true || estaEnModoSilencio == true; 
