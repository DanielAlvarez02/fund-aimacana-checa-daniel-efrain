import { datosCanciones } from './02-funcion-pedir-datos'

export async function agregar(directorio: any[])
{
    const nuevaCancion = await datosCanciones();
    directorio.push(nuevaCancion);
    return directorio;
}