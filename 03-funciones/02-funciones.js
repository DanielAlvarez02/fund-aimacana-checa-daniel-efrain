function sumar(numeUno, numDos) {
    return numeUno + numDos;
}
function restar(numeUno, numDos) {
    return numeUno - numDos;
}
function multiplicar(numeUno, numDos) {
    return numeUno * numDos;
}
function dividir(numeUno, numDos) {
    return numeUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Seleciona una operación: ""suma-1", "resta-2", "multiplicacioin-3",  "division-4, terminamos-5"');
    var esSuma = operacion == 'suma' ||
        operacion == '1' ||
        operacion == 'suma-1';
    var esResta = operacion == 'resta' ||
        operacion == '2' ||
        operacion == 'resta-2';
    var esMultiplicacion = operacion == '3' ||
        operacion == '3' ||
        operacion == 'multiplicacion-3';
    var esDivision = operacion == 'division' ||
        operacion == '4' ||
        operacion == 'division-4';
    var seTermina = operacion == 'seTermina' ||
        operacion == '5' ||
        operacion == 'terminar-5';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (estaValida) {
        var numeUno = +prompt("Numero 1");
        var numDos = +prompt("Numero 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numeUno, numDos);
        }
        else {
            if (esResta) {
                resultado = restar(numeUno, numDos);
            }
            else {
                if (esMultiplicacion) {
                    resultado = multiplicar(numeUno, numDos);
                }
                else {
                    if (esDivision) {
                        resultado = dividir(numeUno, numDos);
                    }
                }
            }
        }
        alert("tu resultado es" + resultado);
        calculadora();
    }
    else {
        if (seTermina) {
            alert("adios");
        }
        else {
            calculadora();
        }
    }
}
