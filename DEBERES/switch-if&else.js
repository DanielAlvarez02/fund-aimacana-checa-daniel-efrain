/* EJEMPLOS DE "IF ANDA ELSE" Y SWITCH
NOMBRE: DANIEL EFRAÍN AIMACAÑA CHECA
FECHA: 05/11/2019
*/
// EEJEMPLOS DE IF AND ELSE
//Ejemplo 1 : Cajero automático
var ValorEntregado = prompt("ingrese porfavor el valor entregado");
var Efectivo = Number(ValorEntregado);
var ValorReal = prompt("ingrese porfavor el valor a pagar");
var Total = Number(ValorReal);
if (Efectivo == Total) {
    console.log("Su compra ha sido realizada");
}
else if (Efectivo > Total) {
    var diferencia = Efectivo - Total;
    console.log(diferencia);
}
else if (Efectivo < Total) {
    console.log("ingrese más efectivo porfavor");
}
// Ejemplo 2 : taximetro de uber 
var distancia = prompt("Ingrese porfavor distancia aproximada de destino");
var Cantidad = Number(distancia);
var DistanciaMinima = 2; // medido en kilometros
var minimo = 1.50;
var ValorPorDistancia = Cantidad * 0.75;
if (Cantidad == DistanciaMinima && Cantidad < DistanciaMinima) {
    console.log(minimo);
}
else if (Cantidad > DistanciaMinima) {
    console.log(ValorPorDistancia);
}
// Ejemplo 3 : Alarma
// formato de la hora es 24 h
var horaActivar = prompt("ingrese la hora de la alarma,por favor");
var Hora = Number(horaActivar);
var minutoActivar = prompt("ingrese minuto de la hora porfavor");
var Minuto = Number(minutoActivar);
var hoy = new Date();
var horaActual = hoy.getHours();
var hora = Number(horaActual);
var minutoActual = hoy.getMinutes();
var minuto = Number(minutoActual);
if (Hora == hora && Minuto == minuto) {
    console.log("La alarma se activará ahora");
}
else { }
//EJIMPLOS DE SWITCH
//Ejemplo 1 : 
