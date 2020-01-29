import { opcion } from "../interfaz/opcion.interface";
import * as prompts from 'prompts';

export async function funcionOpcion()
{
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'Elija un numero a realizar:',
        validate: value => (value < 0 || value > 5) ? `Debe escoger unicamente los números existentes`:true
    }
    const respuesta:opcion = await prompts(opcion);
    return respuesta.numeroDeOpcion;
}