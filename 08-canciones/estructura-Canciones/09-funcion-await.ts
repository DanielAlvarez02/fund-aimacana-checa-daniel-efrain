import * as prompts from 'prompts'

export async function esperear()
{
    const esperear =
    {
        type:'text',
        nombre:'esperar',
        message:'\nPresione ENTER para continuar'
    }
    const esperarRespuesta = await prompts(esperear);
}