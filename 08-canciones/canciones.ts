import * as prompts from 'prompts';
import { datosCanciones } from './interfaz/respuesta-canciones.interface';

function main(){
     datosCanciones();
}


async function datosCanciones(){

    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');

    const preguntas = [
        {
            type: 'text',
            name: 'cancion',
            message: '¿puedes darme el nombre de tu cancion favorita?'
        },
        {
            type: 'text',
            name: 'genero',
            message: '¿puedes darme el género de tu canción favorita'
        },
        {
            type: 'text',
            name: 'autor',
            message: '¿puedes darme el nombre del autor o autora?'
        },
        {
            type: 'text',
            name: 'album',
            message: '¿puedes darme el nombre del álbum?'
        },
        {
            type: 'number',
            name: 'año',
            message: '¿puedes darme el nombre del año de publicación?'
        }
    ]
    
    const canciones: datosCanciones = await prompts(preguntas);
    console.log('Respuesta',canciones);
    console.log('Fin');  
}
main();


function obtenerCanciones(){
    
}