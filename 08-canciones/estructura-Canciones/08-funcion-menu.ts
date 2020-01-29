import { funcionOpcion } from "./01-funcion-opcion";
import { agregar } from "./06-funcion-agregar";
import { esperear } from "./09-funcion-await";
import { imprimir } from "./11-funcion-imprimir";
import { buscar } from "./04-funcion-buscar";
import { eliminar } from "./07-eliminar-pelicula";
import { editarDirectorio } from "./05-funcion-editar-directorio";

export async function menu(directorio: any[])
{
    console.log("\nEscoga una opcion\n");
    console.log("1.Buscar");
    console.log("2.Editar");
    console.log("3.Eliminar");
    console.log("4.Agregar");
    console.log("5.Salir\n");
    const opcion = await funcionOpcion();
    switch(opcion)
    {
        case 1: 
            await buscar(directorio);
            await esperear();
            await menu(directorio);
            break;
        case 2:
            directorio = await editarDirectorio(directorio);
            console.log("\nSus canciones son\n");
            await imprimir(directorio)   
            await esperear();
            await menu(directorio);
            break;
        case 3:
            directorio = await eliminar(directorio);
            console.log("\nSus canciones son:\n");
            await imprimir(directorio);
            await esperear()
            await menu(directorio);
            break;
        case 4:
            directorio = await agregar(directorio);
            console.log("\nSus canciones son:\n");
            await imprimir(directorio)            
            await esperear(); 
            await menu(directorio);
            break;
        default: 
            console.log("\nchao");
            break;
    }
}