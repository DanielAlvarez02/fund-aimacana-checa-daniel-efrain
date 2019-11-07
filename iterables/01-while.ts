// Do WHILE
let vecesQueHeComido = 0;
do{
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch(vecesQueHeComido){
        case 1 : 
        console.log("Desayuno");
        break;
        case 2 : 
        console.log("Almuerzo");
        break;
        case 3 : 
        console.log("Meerineda");
        default:
            console.log("Gorditos"); 
    }
} while(vecesQueHeComido < 3){
    console.log("Vamos a comer");
    let vecesQueHeComido = 0
    vecesQueHeComido = vecesQueHeComido + 1;
    switch(vecesQueHeComido){
        case 1 : 
        console.log("Desayuno");
        break;
        case 2 : 
        console.log("Almuerzo");
        break;
        case 3 : 
        console.log("Meerineda");
        default:
            console.log("Gorditos"); 
    }
}

/*
1 Analisis Socioeconomico
2 Algebra
3 compiladores
5 fundamentos de programacion
7 fisica
11 calculo
13 ingles
*/

let deberes = 0;
let ingles = 0;
let calculo = 0;
let fisica = 0;
let fundamentosDeProgra = 0; 
let compiladores = 0;
let analisis = 0;
let algebra = 0;
do{
    deberes = deberes + 1;
    if(deberes % 13 == 0){
        ingles = ingles + 1;
    }else if(deberes % 11 == 0){
        calculo = calculo + 1;
    }else if(deberes % 7 == 0){
        fisica = fisica + 1;
    }else if(deberes % 5 == 0){
        fundamentosDeProgra = fundamentosDeProgra + 1;
    }else if(deberes % 3 == 0) {
     compiladores = compiladores + 1;
    }else if(deberes % 2 == 0) {
     algebra = algebra + 1;
    }else if(deberes % 2 == 1){
        analisis = analisis +1;
    }else {
        
    }
 
} while(deberes < 1000){
    }

console.log(`hice ${ingles} deberes de ingles.`);
console.log(`hice ${calculo} deberes de calculo.`);
console.log(`hice ${fisica} deberes de fisica.`);
console.log(`hice ${fundamentosDeProgra} deberes de fundamentos de programacion.`);
console.log(`hice ${compiladores} deberes de compiladores.`);
console.log(`hice ${algebra} deberes de algebra.`);
console.log(`hice ${analisis} deberes de analisis.`);
