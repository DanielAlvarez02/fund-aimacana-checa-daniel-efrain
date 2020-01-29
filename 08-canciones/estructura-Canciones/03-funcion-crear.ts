import * as prompts from 'prompts';
import { opcion } from '../interfaz/opcion.interface';
import { datosCanciones } from './02-funcion-pedir-datos';
import { imprimir } from './11-funcion-imprimir';
import { esperear } from './09-funcion-await';

export async function crear()
{
    const cancionesInicialPregunta =
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'¿Cuantas canciones quiere agregar?',
        validate: value => value < 0? `Debe ser un numero mayor a 0.`:true
    }
    const cancionesInicial:opcion = await prompts(cancionesInicialPregunta);
    const cantidadDeCanciones = cancionesInicial.numeroDeOpcion;
    const directorio = [];

    for(let i = 0;i <cantidadDeCanciones ;i ++)
    {
        directorio[i] = await datosCanciones();
    }
    console.log("\nTu cancion es:\n");
    await imprimir(directorio);
    await esperear(); 
    return directorio;
    
}