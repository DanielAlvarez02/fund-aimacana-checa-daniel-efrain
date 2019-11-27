function imprimirMensajeNVeces(mensaje, numeroDeVeces) {
    if (numeroDeVeces == 0) {
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var nuevoNumeroDeVeces = numeroDeVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroDeVeces);
    }
}
function main() {
    imprimirMensajeNVeces('hola', 3);
}
//Funcioon recursiva para que recorra todo el arreglo
var arreglo = [1, 2, 3, 4, 5];
var indice = 0;
function recorridoArreglo(arreglo, indice) {
    if (indice > 0) {
        console.log(arreglo[indice]);
        var nuevoIndice = indice + 1;
        recorridoArreglo(arreglo, nuevoIndice);
    }
    else {
        console.log('nada');
    }
}
