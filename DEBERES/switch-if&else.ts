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
//Ejemplo 1 : Factura
const PVP = 30;
const precioConDescuento = prompt("Por favor ingrese nombre del producto con descuento(en mayúsculas)");
precioConDescuento.toUpperCase();

switch(precioConDescuento){
    case "DEJA" : {
        const Descuento = 10;
        const factura = console.log(PVP - Descuento);
        break;
    }
    case "JURIS" : {
        const Descuento = 5;
        const factura = console.log(PVP - Descuento);
        break;    
    }
    case "HUEVOS" : {
        const Descuento = 2;
        const factura = console.log(PVP - Descuento);
        break; 
    }
    default : {
        console.log("Ingrese un código Válido");
        break;
    }
}

// Ejemplo 2 : Preferncias musicales
const buscador = prompt("Ingrese nombre de la canción que  desea reproducir");
buscador.toLocaleUpperCase;

switch(buscador) { 
    case "ROCK": {
        console.log("Deseas ecuchar : AC/DC, NIRVANA, ROLLING STONES, ETC...");
        break;
    }
    case "INDIE": {
        console.log("Desas ecuchar : MILKYCHANCE");
        break;
    }
    case "ELECTRONICA": { 
        console.log("Deseaas escuchar Aoron Smith, David guetta, etc ...");
        break;
    }
    default : {
        console.log("Sugerrir aleatoriamente");
        break;
    }
}

// Ejemplo 3 : Calificaciones
const nota = prompt("ingrese calificacion"); 
switch(nota) { 
   case "10": { 
      console.log("Excelente"); 
      break; 
   } 
   case "8": { 
      console.log("BUENO"); 
      break; 
   } 
   case "6": {
      console.log("FALLIDO"); 
      break;    
   } 
   case "4": { 
      console.log("DESCARTADO"); 
      break; 
   }  
   default: { 
      console.log("Estudiante fuuera de nomina"); 
      break;              
   } 
}
