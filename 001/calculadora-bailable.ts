//Calculadora con operaciones básicas y función exponencial
const numero1 = prompt("ingresa el numero 1");
const numero2 = prompt("ingresa el numero 2");
const opción   = prompt("ingrese para: sumar [A]; restar [B]; Multiplicar [C]; Dividir [D]; Exponencial[E]");
 
const numero0c = Number(numero1);
const numer0a = Number(numero2);
const euler = Math.E

if( opción == "A"){
    console.log(numero0c + numer0a);
}else if(opcion == "B"){
    console.log(numero0c - numer0a);
}else if(opcion == "C"){
    console.log(numero0c * numer0a);
}else if(opcion == "D"){
    console.log(numero0c / numer0a);
}else if(opcion == "E"){
    console.log( euler ** numero0c); 
    console.log( euler ** numer0a);
}else console.log("");

