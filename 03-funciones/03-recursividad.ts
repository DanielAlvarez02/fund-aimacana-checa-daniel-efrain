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