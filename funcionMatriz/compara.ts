const arreglo1 = [ [1,3]
                ,  [2,4]];

const arreglo2 = [ [3,4]
                ,  [6,7]];

function compara(matriz1, matriz2){

switch(matriz1[0][0].lenght == matriz2[0][0].lenght && matriz1[0].lenght == matriz2[0].lenght){
    case true:

        if(matriz1[0][0] == matriz2[0][0] && matriz1[0][1] == matriz2[0][1] && matriz1[1][0] == matriz2[1][0] && matriz1[1][1] == matriz2[0][1]){
            console.log("si son iguales");
        }else {
            console.log("no son iguales");
        }

        break;

    default:
        console.log("no tienen el mismo tamaño");
    }
    
}

function main(){
    compara(arreglo1,arreglo2);
    suma(arreglo1);
}

//SUMAR LAS FILAS Y COLUMNAS DE LAS MATRICES

const matriz1 = [ [1,3,4]
                , [2,4,6]];

function suma(arreglo1){
    const columna1 = arreglo1[0][0].lenght + arreglo1[1][0].lenght;
    console.log(columna1); 

    const columna2 = arreglo1[0][1].lenght + arreglo1[1][1].lenght;
    console.log(columna2); 

    const columna3 = arreglo1[0][2].lenght + arreglo1[1][2].lenght;
    console.log(columna3); 

    const fila1 = arreglo1[0][0].lenght + arreglo1[0][1].lenght + arreglo1[0][2].lenght;
    console.log(fila1); 

    const fila2 = arreglo1[1][0].lenght + arreglo1[1][1].lenght + arreglo1[1][2].lenght;
    console.log(fila2); 
}       

