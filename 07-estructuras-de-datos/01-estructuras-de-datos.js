"use strict";
//boolean
//string
//null -> object
//number
//persona
//animal --> nombre  científico
//fecha nacimiento, peso, altura, genero
exports.__esModule = true;
//casi en todos los lenguajes
//struct -> Estructura de datos
//clase -> estructuras de datos -> Metodos!
var edad = 20;
//Estructuras de datos en enguaje No Tipado
var poliPerro = {
    nombreCientifico: 'canis lupus familaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true,
    "llave": "valor",
    noEsNecesario: true,
    enojo: undefined,
    edadActual: edad
};
console.log(poliPerro.nombreCientifico);
var poliPerroAmarillo = {
    nombreCientifico: 'canis lupus familaris',
    nombre: 'Grandote',
    clan: null,
    //edad: 4,
    //hijos: null,
    //perritas: [],
    //vacunado: false,
    duenio: duenioPoliPerroAmarillo
};
var duenioPoliPerroAmarillo = {
    nombres: 'Arturo',
    apellidos: 'shule',
    fechaNacimiento: 65,
    mascotasPerros: [poliPerroAmarillo]
};
//Guaradar datos en una estructura de datos
poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
//Acceder a los datos de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.duenio.fechaNacimiento);
console.log(poliPerroAmarillo.duenio.mascotasPerros);
