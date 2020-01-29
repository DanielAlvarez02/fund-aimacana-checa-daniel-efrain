import { cancionInter } from '../interfaz/canciones.interface';

export async function imprimir(cancion: cancionInter)
{
    console.log('Nombre:\t', cancion.cancion);
    console.log('Autor:\t', cancion.autor);
    console.log('Genero:\t',cancion.genero);
    console.log('Album:\t',cancion.album);
    console.log('Año:\t',cancion.año);
}