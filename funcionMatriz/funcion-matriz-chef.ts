const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9]
]

function main(){
    const matrizUno = [
        [1,2],
        [3,3]
    ];

    const matrizDos = [
        [1,2],
        [3,4],
    ];
    const resultado = compararMatriz(matrizUno, matrizDos);
    console.log('resultado: ' , resultado);
}

main();

function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean{
    const esValido = tieneMatricesIgualesDimensiones(
        matrizUno, matrizDos
    );
    if(esValido){
        //Compara los valores
        return tieneMismosValores(
            matrizUno,
            matrizDos
        ); // boolean
    }else {
        return false;
    }
}

function tieneMismosValores(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean {
    const primeraDimension = matrizUno.length;
    const segundaDimension = matrizUno[0].length;
    let banderaSonIguales = true;
    for(let i = 0; i < primeraDimension; i++){
        for(let j = 0; j < segundaDimension; i++){
            const valorActualM1 = matrizUno[i][j]; 
            const valorActualM2 = matrizDos[i][j];
            if(valorActualM1 != valorActualM2){
                banderaSonIguales = false;
            } 
        }
    }
    return banderaSonIguales;
}
    

function tieneMatricesIgualesDimensiones(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean{
    const matrizUnoPrimeraDimension = obtenerPrimeraMatriz(matrizUno);
    const matrizUnoSegundaDimension = obtenerPrimeraMatriz(matrizUno);
    const matrizDosPrimeraDimension = obtenerSegundaMatriz(matrizDos);
    const matrizDosSegundaDimension = obtenerSegundaMatriz(matrizDos);

    console.log(matrizUnoPrimeraDimension);
    console.log(matrizUnoSegundaDimension);
    console.log(matrizDosPrimeraDimension);
    console.log(matrizDosSegundaDimension);

    const noHayFalsos = matrizUnoPrimeraDimension != false &&
    matrizUnoSegundaDimension != false &&
    matrizDosPrimeraDimension != false &&
    matrizDosSegundaDimension != false

    if(noHayFalsos){
        const tieneIgualDimensiones = matrizUnoPrimeraDimension == matrizDosPrimeraDimension &&
        matrizUnoSegundaDimension == matrizDosSegundaDimension
           if(tieneIgualDimensiones){
               return true; 
           }else{
               return false;
           }

       }else{
           return false;
       }
}



function obtenerPrimeraMatriz(matrizUno: number[][]):number | boolean{
    
    //VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    
    if(esValido){

        const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
        let longitudActualMaxima = 0; //AUXILIAR
        let longitudActualMinima = -1; //AUXILIAR
        for(let i = 0; i + 1 < matrizUno.length; i++ )
        {
           
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
                if(longitudActualMaxima != longitudActualMinima){
                    return false
                }else{
                    return matrizUno[0].length;
                }
        
    }else{
        return false;

    }

    
}

function obtenerSegundaMatrizChef(matrizUno: number[][]):number | boolean{
    const esValido = verificarTodosLosElementosDeUnArreglo(matrizUno);
    let longitudActualMaxima = 0; //AUXILIAR
    let longitudActualMinima = -1; //AUXILIAR
    for(let i = 0; i + 1 < matrizUno.length; i++ )
    {
       
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
            if(longitudActualMaxima != longitudActualMinima){
                return false
            }else{
                return matrizUno[0].length;
            }
            
    }

    



function obtenerSegundaMatriz(matrizUno: number[][]):number | boolean{
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

