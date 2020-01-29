import { cancionInter } from "../interfaz/canciones.interface";

export async function imprimir(directorio:cancionInter[])
{
    const longitud = await directorio.length;
    console.log('Posicion\t Nombre');
    for(let i = 1;i <= longitud; i ++)
    {
        console.log("   " + i + ".\t\t");
    }
}