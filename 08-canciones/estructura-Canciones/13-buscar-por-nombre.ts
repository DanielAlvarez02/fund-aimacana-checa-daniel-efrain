import * as prompts from 'prompts';
import { cancionInter } from "../interfaz/canciones.interface";

export async function buscarCancionPorNombre(directorio: cancionInter[])
{
    const cancionABuscar = await prompts
    (
        {
            type:'text',
            name:'nombre',
            message:"Ingresa el nombre de la canción que busca:",
        }
    );
    const cancionEncontrada = directorio.find
    (
        function(valorActual)
        {
            return valorActual.nombre == cancionABuscar.nombre;
        }
    )
    return cancionEncontrada;
}