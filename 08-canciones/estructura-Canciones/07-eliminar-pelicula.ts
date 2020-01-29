import * as prompts from 'prompts';
import { cancionInter } from "../interfaz/canciones.interface";
import { tablaInterface } from '../interfaz/table.interface';
import { realizarTabla } from './10-funcion-tabla';
import { opcion } from '../interfaz/opcion.interface';
import { buscarCancionPorIndice } from './12-buscar-por-indice';
import { buscarCancionPorNombre } from './13-buscar-por-nombre';

export async function eliminar(directorio:cancionInter[])
{
    const tablaCancionesBuscar:tablaInterface[] = await realizarTabla(directorio);  
    console.log('\n¿Cómo desea buscar ?:\n');
    console.log('1.Por indice de la canción.');
    console.log('2.Por el nombre de la canción.\n');
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `Escoger solo opcionese existentes`:true
    }
    const opcionRespuesta:opcion = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.numeroDeOpcion;
    switch (numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarCancionPorIndice(tablaCancionesBuscar);
            directorio.splice(indiceEncontrado,1);
            break;
        case 2:
            const cancionEncontrada = await buscarCancionPorNombre(directorio);
            const indiceCancionEncontrada = directorio.findIndex
            (
                function(valorActual, indice)
                {
                    if(valorActual.nombre == cancionEncontrada.nombre)
                    {
                        return indice;
                    }
                }
            );
            directorio.splice(indiceCancionEncontrada, 1);
            break;
    }
    return directorio;
}