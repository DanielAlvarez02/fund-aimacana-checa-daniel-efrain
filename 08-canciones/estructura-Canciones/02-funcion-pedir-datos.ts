import { cancionInter } from "../interfaz/canciones.interface";
import * as prompts from 'prompts';

export async function datosCanciones()
{
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
    
    const canciones = await prompts(preguntas);
    return canciones;
}