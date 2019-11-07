// Do WHILE
var vecesQueHeComido = 0;
do {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almuerzo");
            break;
        case 3:
            console.log("Meerineda");
        default:
            console.log("Gorditos");
    }
} while (vecesQueHeComido < 3);
{
    console.log("Vamos a comer");
    var vecesQueHeComido_1 = 0;
    vecesQueHeComido_1 = vecesQueHeComido_1 + 1;
    switch (vecesQueHeComido_1) {
        case 1:
            console.log("Desayuno");
            break;
        case 2:
            console.log("Almuerzo");
            break;
        case 3:
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
var deberes = 0;
var ingles = 0;
var calculo = 0;
var fisica = 0;
var fundamentosDeProgra = 0;
var compiladores = 0;
var analisis = 0;
var algebra = 0;
do {
    deberes = deberes + 1;
    if (deberes % 13 == 0) {
        ingles = ingles + 1;
    }
    else if (deberes % 11 == 0) {
        calculo = calculo + 1;
    }
    else if (deberes % 7 == 0) {
        fisica = fisica + 1;
    }
    else if (deberes % 5 == 0) {
        fundamentosDeProgra = fundamentosDeProgra + 1;
    }
    else if (deberes % 3 == 0) {
        compiladores = compiladores + 1;
    }
    else if (deberes % 2 == 0) {
        algebra = algebra + 1;
    }
    else if (deberes % 2 == 1) {
        analisis = analisis + 1;
    }
    else {
    }
} while (deberes < 1000);
{
}
console.log("hice " + ingles + " deberes de ingles.");
console.log("hice " + calculo + " deberes de calculo.");
console.log("hice " + fisica + " deberes de fisica.");
console.log("hice " + fundamentosDeProgra + " deberes de fundamentos de programacion.");
console.log("hice " + compiladores + " deberes de compiladores.");
console.log("hice " + algebra + " deberes de algebra.");
console.log("hice " + analisis + " deberes de analisis.");
