//boolean
//string
//null -> object
//number
//persona
//animal --> nombre  científico
//fecha nacimiento, peso, altura, genero

//casi en todos los lenguajes
//struct -> Estructura de datos
//clase -> estructuras de datos -> Metodos!

const edad = 20;

//Estructuras de datos en enguaje No Tipado
const poliPerro = {
    nombreCientifico: 'canis lupus familaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela','Zoraida'],
    vacunado: true,
    "llave" : "valor",
    noEsNecesario :  true, //pueden poner la última coma
    enojo : undefined,
    edadActual: edad, //variables
}
console.log(poliPerro.nombreCientifico);

//Estructura de datos en lenguajes Tipados
import {AnimalPerrito} from './interfaces/animal-perrito.interface';
import { duenio } from './interfaces/duenio.interface';

const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico: 'canis lupus familaris',
    nombre: 'Grandote',
    clan: null, //A cualquier propiedad de la estructura se puede poner "null"
    //edad: 4,
    //hijos: null,
    //perritas: [],
    //vacunado: false,
    duenio: duenioPoliPerroAmarillo,
}

const duenioPoliPerroAmarillo: duenio = {
    nombres: 'Arturo',
    apellidos:'shule',
    fechaNacimiento: 65,
    mascotasPerros: [poliPerroAmarillo],

}

//Guaradar datos en una estructura de datos
poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;

//Acceder a los datos de una estructura de datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.duenio.fechaNacimiento);
console.log(poliPerroAmarillo.duenio.mascotasPerros); 