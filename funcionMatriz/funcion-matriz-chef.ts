const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9]
]


function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean{
    return true;
}

function obtenerPrimeraMatriz(matrizUno: number[][]):number | false{
    
    //VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    
    if(esValido){

        const primeraDimensionDelArreglo =  matrizUno.length;
        return primeraDimensionDelArreglo;
        
    }else{
        return false;

    }

    
}

function obtenerSegundaMatrizChef(matrizUno: number[][]):number | false{
    const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    let longitudActualMaxima = 0; //AUXILIAR
    let longitudActualMinima = -1; //AUXILIAR
    for(let i = 0; i + 1 < matrizUno.length; i++ ){
       
        const elementoActual = matrizUno[i]; //arreglo
        const longitudActual = elementoActual.length // segunda dimension
        
            if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
            }

            if(longitudActualMinima == -1){
                longitudActualMinima = longitudActual;
                }else{
                    if(longitudActual < longitudActualMinima){
                        longitudActualMinima = longitudActual;
                    }
                }
            }
            return false;
        }



function obtenerSegundaMatriz(matrizUno: number[][]):number | false{
    const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    for(let i = 0; i + 1 < matrizUno.length; i++ ){
        const elementoActual = matrizUno[i]; //arreglo
        const dimensionUno = elementoActual.length // segunda dimension
        const elementoSegundo = matrizUno[i+1]; //arreglo
        const dimensionSiguiente = elementoActual.length
        if(dimensionUno == dimensionSiguiente){
            return dimensionUno || dimensionSiguiente;
        }
        }

    }
    


function verificarTodosLosElementosDeUnArreglo(arreglo: any[]){
    for(let i = 0; i < arreglo.length; i++){
        
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' && 
        elementoActual.indexOf; //truty
        
        if(!esUnArreglo){
            console.log("no es un arrreglo");
            return false;
        }
    }
    return false;    

}