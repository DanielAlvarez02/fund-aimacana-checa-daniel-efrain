function imprimirMensajeNVeces(
    mensaje:string,
    numeroDeVeces:number
): void{
    if(numeroDeVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroDeVeces = numeroDeVeces - 1;
        imprimirMensajeNVeces(mensaje,nuevoNumeroDeVeces);
    }
}

function main(){
    imprimirMensajeNVeces('hola',3);
}

//Funcioon recursiva para que recorra todo el arreglo
const arreglo: number[]=[1,2,3,4,5];
let indice = 0
function recorridoArreglo(
    arreglo,
    indice
): void{
    if (indice > 0 ){
        console.log(arreglo[indice]);
        const nuevoIndice = indice + 1;
        recorridoArreglo(arreglo,nuevoIndice);
    }else{
        console.log('nada');       
    }

}




const arregloDosDimensiones = [
    [1,2],
    [3,4]
];

arregloDosDimensiones[0][0]; //1
arregloDosDimensiones[0][1]; //2


const arregloMasDimensiones = [
    
        [1,2,3,4],
        [4,5,6,7] //indice y longitud
    
];


arregloMasDimensiones[0][0]; //1
arregloMasDimensiones[0][1]; //2
arregloMasDimensiones[1][0]; //3
arregloMasDimensiones[1][1]; //4

//Producto cruz
//multiplicar el 0*n elemento +
//multiplicar el 0 + 1*n - 1 elemnto +
//multiplicar el 0 + 2*n - 2 elemento +

arregloMasDimensiones[0][0]; //[1,2,3,4]
arregloMasDimensiones[0].length; //4
arregloMasDimensiones[1]; //[4,5,6,7]
arregloMasDimensiones.length; //2

function productoCruz(
    arregloMasDimensiones: number[][]): number[]
        {
            let  longitud = arregloMasDimensiones[1].length
            let i = 0;


            for (i = 0, i < 4 , i++) {
                let elemento = arregloMasDimensiones[0][i];
                const elementos = elemento;

                
                
            
            }
            
}



