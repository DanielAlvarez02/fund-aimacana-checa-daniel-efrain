import * as prompts from 'prompts';
import { opcion } from '../interfaz/opcion.interface';
import { cancionInter } from '../interfaz/canciones.interface';
import { realizarTabla } from './10-funcion-tabla';
import { tablaInterface } from '../interfaz/table.interface';
import { buscarCancionPorIndice } from './12-buscar-por-indice';
import { buscarCancionPorNombre } from './13-buscar-por-nombre';
import { imprimir } from './14-imprimir-objeto';

export async function buscar(directorio: cancionInter[])
{
    const tablaCancionesBuscar:tablaInterface[] = await realizarTabla(directorio);  
    console.log('\n¿Cómo desea buscar?:\n');
    console.log('1.Por indice de la canción.');
    console.log('2.Nombre de la canción.\n');
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `Escoger las opciones existentes`:true
    }
    const opcionRespuesta:opcion = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.numeroDeOpcion;
    switch (numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarCancionPorIndice(tablaCancionesBuscar);
            await imprimir(directorio[indiceEncontrado]);
            break;
        case 2:
            const cancionEncontrada = await buscarCancionPorNombre(directorio);
            await imprimir(cancionEncontrada);
            break;
    }
}