/* EJEMPLOS DE "IF ANDA ELSE" Y SWITCH
NOMBRE: DANIEL EFRAÍN AIMACAÑA CHECA
FECHA: 05/11/2019
*/
// EEJEMPLOS DE IF AND ELSE
//Ejemplo 1 : Cajero automático
const ValorEntregado = prompt("ingrese porfavor el valor entregado");
const Efectivo = Number(ValorEntregado);
const ValorReal = prompt("ingrese porfavor el valor a pagar"); 
const Total = Number(ValorReal);

if(Efectivo == Total ){
    console.log("Su compra ha sido realizada");
}else if(Efectivo > Total){
    const diferencia = Efectivo - Total ;
    console.log(diferencia);
}else if(Efectivo < Total){
    console.log("ingrese más efectivo porfavor");
}  


// Ejemplo 2 : taximetro de uber 
const distancia = prompt ("Ingrese porfavor distancia aproximada de destino");
const Cantidad = Number(distancia);
const DistanciaMinima = 2; // medido en kilometros
const minimo = 1.50;
const ValorPorDistancia = Cantidad * 0.75; 

if( Cantidad == DistanciaMinima && Cantidad < DistanciaMinima){
    console.log(minimo);
}else if(Cantidad > DistanciaMinima){
    console.log(ValorPorDistancia);
} 


// Ejemplo 3 : Alarma
// formato de la hora es 24 h
const horaActivar = prompt("ingrese la hora de la alarma,por favor");
const Hora = Number(horaActivar);
const minutoActivar = prompt("ingrese minuto de la hora porfavor");
const Minuto = Number(minutoActivar);
const hoy = new Date();
const horaActual = hoy.getHours();
const hora = Number(horaActual);
const minutoActual= hoy.getMinutes();
const minuto = Number(minutoActual);

if(Hora == hora && Minuto == minuto){
    console.log("La alarma se activará ahora");
}else{}


//EJIMPLOS DE SWITCH
//Ejemplo 1 : 

