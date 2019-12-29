var arregloMatriz = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9]
];
function main() {
    var matrizUno = [
        [1, 2],
        [3]
    ];
    var matrizDos = [
        [1, 2],
        [3, 4],
    ];
    compararMatriz(matrizUno, matrizDos);
}
main();
function compararMatriz(matrizUno, matrizDos) {
    var matrizUnoPrimeraDimension = obtenerPrimeraMatriz(matrizUno);
    var matrizUnoSegundaDimension = obtenerPrimeraMatriz(matrizUno);
    var matrizDosPrimeraDimension = obtenerSegundaMatriz(matrizDos);
    var matrizDosSegundaDimension = obtenerSegundaMatriz(matrizDos);
    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);
    return true;
}
function obtenerPrimeraMatriz(matrizUno) {
    //VALIDACIONES
    var esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    if (esValido) {
        var esValido_1 = verificarTodosLosElementosDeUnArreglo(matrizUno);
        var longitudActualMaxima = 0; //AUXILIAR
        var longitudActualMinima = -1; //AUXILIAR
        for (var i = 0; i + 1 < matrizUno.length; i++) {
            var elementoActual = matrizUno[i]; //arreglo
            var longitudActual = elementoActual.length; // segunda dimension
            if (longitudActualMaxima < longitudActual) {
                longitudActualMaxima = longitudActual;
            }
            if (longitudActualMinima == -1) {
                longitudActualMinima = longitudActual;
            }
            else {
                if (longitudActual < longitudActualMinima) {
                    longitudActualMinima = longitudActual;
                }
            }
        }
        if (longitudActualMaxima != longitudActualMinima) {
            return false;
        }
        else {
            return matrizUno[0].length;
        }
    }
    else {
        return false;
    }
}
function obtenerSegundaMatrizChef(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    var longitudActualMaxima = 0; //AUXILIAR
    var longitudActualMinima = -1; //AUXILIAR
    for (var i = 0; i + 1 < matrizUno.length; i++) {
        var elementoActual = matrizUno[i]; //arreglo
        var longitudActual = elementoActual.length; // segunda dimension
        if (longitudActualMaxima < longitudActual) {
            longitudActualMaxima = longitudActual;
        }
        if (longitudActualMinima == -1) {
            longitudActualMinima = longitudActual;
        }
        else {
            if (longitudActual < longitudActualMinima) {
                longitudActualMinima = longitudActual;
            }
        }
    }
    if (longitudActualMaxima != longitudActualMinima) {
        return false;
    }
    else {
        return matrizUno[0].length;
    }
}
function obtenerSegundaMatriz(matrizUno) {
    var esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    for (var i = 0; i + 1 < matrizUno.length; i++) {
        var elementoActual = matrizUno[i]; //arreglo
        var dimensionUno = elementoActual.length; // segunda dimension
        var elementoSegundo = matrizUno[i + 1]; //arreglo
        var dimensionSiguiente = elementoActual.length;
        if (dimensionUno == dimensionSiguiente) {
            return dimensionUno || dimensionSiguiente;
        }
    }
}
function verificarTodosLosElementosDeUnArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        var elementoActual = arreglo[i];
        var esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf; //truty
        if (!esUnArreglo) {
            console.log("no es un arrreglo");
            return false;
        }
    }
    return false;
}
