//Calculadora con operaciones básicas y función exponencial
const numero01 = prompt("ingresa el numero 1");
const numero02 = prompt("ingresa el numero 2");
const opcion   = prompt("ingrese para: sumar [A]; restar [B]; Multiplicar [C]; Dividir [D]; Exponencial[E]");
 
const numeroc = Number(numero01);
const numeroa = Number(numero02);
const euler = Math.E

if( opcion == "A"){
    console.log(numeroc + numeroa);
}else if(opcion == "B"){
    console.log(numeroc - numeroa);
}else if(opcion == "C"){
    console.log(numeroc * numeroa);
}else if(opcion == "D"){
    console.log(numeroc % numeroa);
}else if(opcion == "E"){
    console.log( euler ** numeroc); 
    console.log( euler ** numeroa);
}else console.log("");

