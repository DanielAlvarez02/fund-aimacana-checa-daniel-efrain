import * as prompts from 'prompts';
import { cancionInter } from "../interfaz/canciones.interface";
import { funcionOpcion } from './01-funcion-opcion';
import { imprimir } from './14-imprimir-objeto';

export async function editar(cancion:cancionInter)
{
    console.log("\nDe la canción " + cancion.nombre + "Que va a editar:\n");
    console.log('Nombre:\t\t', cancion.nombre);
    console.log('Autor:\t', cancion.autor);
    console.log('Genero:\t\t',cancion.genero);
    console.log('Album:\t',cancion.album);
    console.log('Año:\t',cancion.año);
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1:
            const nuevoNombre = await prompts
            (
                {
                    type:'text',
                    name:'nuevoNombre',
                    message:'Ingrese el nuevo nombre:'
                }
            );
            cancion.nombre = nuevoNombre.nuevoNombre;
            break;
        case 2:
            const nuevoGenero = await prompts
            (
                {
                    type:'text',
                    name:'nuevoGenero',
                    message:'Ingrese el nuevo genero:'
                }
            );
            cancion.genero = nuevoGenero.nuevoGenero;
            break; 
        case 3:
            const nuevoAutor = await prompts
            (
                {
                    type:'text',
                    name:'nuevoAutor',
                    message:'Ingrese el nuevo autor:'
                }
            );
            cancion.autor = nuevoAutor.nuevoAutor;
            break;
        case 4:
            const nuevoAlbum = await prompts
            (
                {
                    type:'text',
                    name:'nuevoAlbum',
                    message:'Ingrese el nuevo protagonista:'
                }
            );
            cancion.album = nuevoAlbum.nuevoAlbum;
            break;
        default:
            const nuevoAnio = await prompts
            (
                {
                    type:'text',
                    name:'nuevoAnio',
                    message:'Ingrese la nueva duracion:'
                }
            );
            cancion.año = nuevoAnio.nuevoAnio;
            break;
    }
    console.log("\nLa pelicula editada es:");
    await imprimir(cancion);
    return cancion;
}