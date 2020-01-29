import * as prompts from 'prompts'
import { tablaInterface } from '../interfaz/table.interface';

export async function buscarCancionPorIndice(tablaPeliculas: tablaInterface[])
{
    const idABuscar = await prompts
    (
        {
            type:'number',
            name:'id',
            message:"Ingresa el indice de la cancion que busca:",
            validate: value => (value < 0 || value > tablaPeliculas.length)? `No existe`:true
        }
    )
    const indiceEncontrado:number = tablaPeliculas.findIndex
    (
        function(valorActual, indice, arreglo)
        {
            return valorActual.id == idABuscar.id;
        }
    )
    return indiceEncontrado;
}