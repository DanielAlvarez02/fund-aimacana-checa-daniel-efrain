import { cancionInter } from "../interfaz/canciones.interface";
import { tablaInterface } from "../interfaz/table.interface";

export async function realizarTabla(directorio: cancionInter[])
{
    const longitud = directorio.length;
    const tabla:tablaInterface[] = []
    for(let i = 1;i <= longitud; i ++)
    {
        tabla[i-1] =
        {
            id: i,
            nombre: directorio[i-1].cancion
        }
    }
    return tabla;
}