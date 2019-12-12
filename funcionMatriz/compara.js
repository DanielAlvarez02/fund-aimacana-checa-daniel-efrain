var arreglo1 = [[1, 3],
    [2, 4]];
var arreglo2 = [[3, 4],
    [6, 7]];
function compara(matriz1, matriz2) {
    switch (matriz1[0][0].lenght == matriz2[0][0].lenght && matriz1[0].lenght == matriz2[0].lenght) {
        case true:
            if (matriz1[0][0] == matriz2[0][0] && matriz1[0][1] == matriz2[0][1] && matriz1[1][0] == matriz2[1][0] && matriz1[1][1] == matriz2[0][1]) {
                console.log("si son iguales");
            }
            else {
                console.log("no son iguales");
            }
            break;
        default:
            console.log("no tienen el mismo tamaño");
    }
}
function main() {
    suma(matriz1);
}
//SUMAR LAS FILAS Y COLUMNAS DE LAS MATRICES
var matriz1 = [[1, 3, 4],
    [2, 4, 6]];
function suma(arreglo1) {
    var columna1 = arreglo1[0][0] + arreglo1[1][0];
    console.log(columna1);
    var columna2 = arreglo1[0][1] + arreglo1[1][1];
    console.log(columna2);
    var columna3 = arreglo1[0][2] + arreglo1[1][2];
    console.log(columna3);
    var fila1 = arreglo1[0][0] + arreglo1[0][1] + arreglo1[0][2];
    console.log(fila1);
    var fila2 = arreglo1[1][0] + arreglo1[1][1] + arreglo1[1][2];
    console.log(fila2);
}
