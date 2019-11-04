var numero01 = prompt("ingresa el numero 1");
var numero02 = prompt("ingresa el numero 2");
var opcion = prompt("ingrese para: sumar [A]; restar [B]; Multiplicar [C]; Dividir [D]; Exponencial[E]");
var numeroc = Number(numero01);
var numeroa = Number(numero02);
if (opcion == "A") {
    console.log(numeroc + numeroa);
}
else if (opcion == "B") {
    console.log(numeroc - numeroa);
}
else if (opcion == "C") {
    console.log(numeroc * numeroa);
}
else if (opcion == "D") {
    console.log(numeroc % numeroa);
}
else if (opcion == "E") {
    console.log(numeroc ^ numeroa);
}
else
    console.log("");
