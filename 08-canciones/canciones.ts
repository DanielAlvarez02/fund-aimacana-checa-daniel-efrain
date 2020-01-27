import * as prompts from 'prompts';
import { datosCanciones } from './interfaz/respuesta-canciones.interface';
import { elegirOpcion } from "./interfaz/elegir-opcion.interface";
import { tabla } from './interfaz/tabla.interface';

function main(){
    
}


async function datosCanciones(){

    const preguntas = [
        {
            type: 'text',
            name: 'cancion',
            message: '¿puedes darme el nombre de tu cancion favorita?'
        },
        {
            type: 'text',
            name: 'genero',
            message: '¿puedes darme el género de tu canción favorita'
        },
        {
            type: 'text',
            name: 'autor',
            message: '¿puedes darme el nombre del autor o autora?'
        },
        {
            type: 'text',
            name: 'album',
            message: '¿puedes darme el nombre del álbum?'
        },
        {
            type: 'number',
            name: 'año',
            message: '¿puedes darme el nombre del año de publicación?'
        }
    ]
    
    const canciones: datosCanciones = await prompts(preguntas);
    return canciones;
}

async function elegirOpcion(){
    const opcion = 
    {
        type:'number',
        name:'Opcion',
        message:'Elija un numero a realizar:',
        validate: value => (value < 0 || value > 5) ? `Debe escoger unicamente los números existentes`:true
    }
    const respuesta:elegirOpcion = await prompts(opcion);
    return respuesta;
}


async function crear()
{
    const primeraCancion =
    {
        type:'number',
        name:'opcion',
        message:'¿Cuantas canciones quieres agregar?',
        validate: value => value < 0? 'aaaaaaa':true
    }

    const cancion1:elegirOpcion = await prompts(primeraCancion);
    const numeroDeCanciones = cancion1.opcion;
    const datosDeLaCancion = [];

    for(let i = 0;i <numeroDeCanciones ;i ++)
    {
        datosDeLaCancion[i] = await datosCanciones();
    }
    console.log("El directorio creado es:");
    await imprimir(datosDeLaCancion);
    await espero(); 
    return datosDeLaCancion;
    
}

async function buscar(estructura: datosCanciones[])
{
    const buscar = await tabla(estructura);  
    console.log('\n¿Como desea buscar?\n');
    console.log('1.indice de la cancion.');
    console.log('2.Nombre de la cancion.\n');
    const opcion = 
    {
        type:'number',
        name:'opcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `Escoger las opciones existentes`:true
    }
    const opcionRespuesta:elegirOpcion = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.opcion;
    switch (numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarCancionesPorIndice(buscar);
            await imprimirObjeto(estructura[indiceEncontrado]);
            break;
        case 2:
            const peliculaEncontrada = await buscarCancionesPorNombre(estructura);
            await imprimirObjeto(peliculaEncontrada);
            break;
    }
}

async function editarLaEstructura(estructura:datosCanciones[])
{
    const buscar:tabla[] = await tabla(estructura);  
    console.log('\n¿Como desea buscar?\n');
    console.log('1.Por indice de la cancion o ');
    console.log('2.Nombre de la cancion.\n');
    const opcion = 
    {
        type:'number',
        name:'opcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `Escoger las opciones existentes`:true
    }
    const opcionRespuesta:elegirOpcion = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.opcion;
    switch(numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarCancionesPorIndice(buscar);
            estructura[indiceEncontrado] = await editarCancion(estructura[indiceEncontrado])
            break;
        case 2:
            const cancionEncontrada = await buscarCancionesPorNombre(estructura);
            const indiceCancionEncontrada = estructura.findIndex
            (
                function(valorActual, indice)
                {
                    if(valorActual.cancion == cancionEncontrada.cancion)
                    {
                        return indice;
                    }
                }
            );
            estructura[indiceCancionEncontrada] = await editarCancion(estructura[indiceCancionEncontrada]);
            break;
    }
    return estructura;
}

async function agregarCancion(estructura: any[])
{
    const nuevaCancion = await datosCanciones();
    estructura.push(nuevaCancion);
    return estructura;
}

async function eliminar(estructura:datosCanciones[])
{
    const tablaCancionesBuscar:tabla[] = await tabla(estructura);  
    console.log('\n¿Como desea buscar la canción?\n');
    console.log('1.Por el indice de la canción o ');
    console.log('2.el nombre de la canción.\n');
    const opcion = 
    {
        type:'number',
        name:'opcion',
        message:'Escoge una opcion:',
        validate: value => (value < 0 || value > 2) ? `Escoger solo las opciones existentes`:true
    }
    const opcionRespuesta:elegirOpcion = await prompts(opcion);
    const numeroDeOpcion = opcionRespuesta.opcion;
    switch (numeroDeOpcion)
    {
        case 1:
            const indiceEncontrado = await buscarCancionesPorIndice(tablaCancionesBuscar);
            estructura.splice(indiceEncontrado,1);
            break;
        case 2:
            const cancionEncontrada = await buscarCancionesPorNombre(estructura);
            const indiceCancionEncontrada = estructura.findIndex
            (
                function(valorActual, indice)
                {
                    if(valorActual.cancion == cancionEncontrada.cancion)
                    {
                        return indice;
                    }
                }
            );
            estructura.splice(indiceCancionEncontrada, 1);
            break;
    }
    return estructura;
}

async function menu(estructura: any[])
{
    console.log("\nEscoger la opcion a realizar\n");
    console.log("1.Buscar en la estructura");
    console.log("2.Editar la estructura");
    console.log("3.Eliminar una cacnion");
    console.log("4.Agregar una cancion");
    console.log("5.Salir\n");
    const opcion = await elegirOpcion();
    switch(opcion)
    {
        case 1: 
            await buscar(estructura);
            await espero();
            await menu(estructura);
            break;
        case 2:
            estructura = await editarLaEstructura(estructura);
            console.log("\nLas canciones son:\n");
            await imprimir(estructura)   
            await espero();
            await menu(estructura);
            break;
        case 3:
            estructura = await eliminar(estructura);
            console.log("\nLas cacnciones son:\n");
            await imprimir(estructura);
            await espero()
            await menu(estructura);
            break;
        case 4:
            estructura = await agregarCancion(estructura);
            console.log("\nLas cacniones son:\n");
            await imprimir(estructura)            
            await espero(); 
            await menu(estructura);
            break;
        default: 
            return "gracias";
            break;
    }
}

async function espero()
{
    const espero =
    {
        type:'text',
        nombre:'espero',
        message:'Para continuar ponga enter'
    }
    const esperarRespuesta = await prompts(espero);
}

async function tabla(estructura: datosCanciones[])
{
    const longitud = estructura.length;
    const tablaCanciones:datosCanciones[] = []
    for(let i = 1;i <= longitud; i ++)
    {
        tablaCanciones[i-1] =
        {
            id: i,
            nombre: estructura[i-1].cancion
        }
    }
    return tablaCanciones;
}

async function imprimir(estructura:datosCanciones[])
{
    const longitud = estructura.length;
    console.log('Posicion\t Nombre');
    for(let i = 1;i <= longitud; i ++)
    {
        console.log("   " + i + ".\t\t", estructura[i-1].cancion + ".");
    }
}

async function buscarCancionesPorIndice(tablaCanciones: tabla[])
{
    const idABuscar = await prompts
    (
        {
            type:'number',
            name:'id',
            message:"Ingresa el indice de la cancion para buscarla:",
            validate: value => (value < 0 || value > tabla.length)? `Esa cancion no existe`:true
        }
    )
    const indiceEncontrado:number = tablaCanciones.findIndex
    (
        function(valorActual, indice, arreglo)
        {
            return valorActual.id == idABuscar.id;
        }
    )
    return indiceEncontrado;
}

async function buscarCancionesPorNombre(estructura: datosCanciones[])
{
    const buscar = await prompts
    (
        {
            type:'text',
            name:'nombre',
            message:"Ingresa el nombre de la cancion a buscar:",
        }
    );
    const cancionEncontrada = estructura.find
    (
        function(valorActual)
        {
            return valorActual.cancion == buscar.nombre;
        }
    )
    return cancionEncontrada;
}

async function imprimirObjeto(cancion: datosCanciones)
{
    console.log('Nombre:\t\t', cancion.cancion);
    console.log('Genero:\t', cancion.genero);
    console.log('Autor:\t\t',cancion.autor);
    console.log('Album:\t',cancion.album);
    console.log('Año:\t',cancion.anio);
}

async function editarCancion(cancion:datosCanciones)
{
    console.log("\nDe la cancion " + cancion.cancion + "Que desea editar:\n");
    console.log('1.Nombre:\t', cancion.cancion);
    console.log('2.Genero:\t',cancion.genero);
    console.log('3.Album:\t',cancion.album);
    console.log('4.Autor:\t',cancion.autor);
    console.log('4.Año:\t',cancion.anio);
    const opcion = await elegirOpcion();
    switch(opcion){
        case 1:
            const nuevaCancion = await prompts
            (
                {
                    type:'text',
                    name:'nuevoNombre',
                    message:'Ingrese la nueva cancion:'
                }
            );
            cancion.cancion = nuevaCancion.nuevoNombre;
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
                    name:'autor',
                    message:'Ingrese el nuevo director:'
                }
            );
            cancion.autor = nuevoAutor.autor;
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
            cancion.anio = nuevoAnio.nuevoAnio;
            break;
    }
    console.log("\nLa cancion editada es:");
    await imprimirObjeto(cancion);
    return cancion;
}

main();