function sumar(numeUno:number , numDos:number): number{
    return numeUno + numDos;        
}
function restar(numeUno:number , numDos:number): number{
    return numeUno - numDos;
}
function multiplicar(numeUno:number , numDos:number): number{
    return numeUno * numDos;
}
function dividir(numeUno:number , numDos:number): number{
    return numeUno / numDos;
}

function main(){
    calculadora();
}

function calculadora(){
    const operacion:string = prompt('Seleciona una operación: ""suma-1", "resta-2", "multiplicacioin-3",  "division-4, terminamos-5"');
    const esSuma:Boolean = operacion == 'suma' ||
          operacion == '1' ||
          operacion == 'suma-1';
    const esResta:Boolean = operacion == 'resta' ||
          operacion == '2' ||
          operacion == 'resta-2';
    const esMultiplicacion:Boolean = operacion == '3' ||
          operacion == '3'||
          operacion == 'multiplicacion-3';
    const esDivision:Boolean = operacion == 'division' ||
          operacion == '4' ||
          operacion == 'division-4';
    const seTermina: Boolean = operacion == 'seTermina'||
          operacion == '5'  ||
          operacion == 'terminar-5';
    const estaValida :Boolean = esSuma || esResta || esMultiplicacion || esDivision;   

    if(estaValida){
       const numeUno:number = +prompt("Numero 1");
       const numDos:number = +prompt("Numero 2");
       let resultado = 0;
    if(esSuma){
        resultado = sumar(numeUno,numDos);        
    }else{
         if(esResta){
             resultado = restar(numeUno,numDos);
            }else{
                 if(esMultiplicacion){
        resultado = multiplicar(numeUno,numDos);
    }else{
    if(esDivision){
        resultado = dividir(numeUno,numDos);
    }

}

}
}
alert("tu resultado es" + resultado);
calculadora();


//pseudocodigo
/*
1)Seleccionar operacion
2.1) La seleccion no es valida
    2.1.1) Vueñlve a seleccionar la operacion
2.2) La sellecion non es valida
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operacion
*\
*/
            }else{
                if (seTermina){
                    alert("adios");
                }else{
                    calculadora();
                }
                        }
        }

