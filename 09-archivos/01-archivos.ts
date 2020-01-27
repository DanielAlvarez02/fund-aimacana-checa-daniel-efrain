import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./escribir-archivo";
import {Estudiante} from "./interfaces/estudiante.interaface";
import * as prompts from 'prompts';

async function main(){

    let minimoId = -1;

    //Operadores
    arregloCargadoArchivo

        .forEach( //NO ENVIAN NADA Y NO SE LES DEVUELVE NADA
                  //ITERAR
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual
                }

            }
        );
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    minimoId = minimoId + 1;

    let arregloCargadoArchivo;

    try{
        const arregloCargadoArchivo = JSON.parse('MaMa');

    } catch(error){
        arregloCargadoArchivo = [];
        console.error('error parseando archivo');
    }

    /*try{
        let a = 1;
        a = 2;
        a = 3;
        var a = b;
        console.log('1');
        console.log('2');
        console.log('3');
        console.log('3');
        console.log('4');
        console.log('5');
        console.log('6');
        throw new ReferenceError ("El archivo esta mal parseado");
    }catch {
        console.log(error);
        console.log(':3');
        
    }*/


    const arregloEstudiantes: Estudiante[] = arregloCargadoArchivo;
    const arregloPreguntas = [{

        type: 'text',
        name: 'nombre',
        message: 'ingresa tu nombre'

       }
    ];

    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    console.log(respuestaEstudianteUno);

    const nuevoRegistroUno = {
        id:contador ++,
        nombre: respuestaEstudianteUno.nombre
    }

    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    console.log(respuestaEstudianteDos);

    const nuevoRegistro = {
        id:contador ++,
        nombre: respuestaEstudianteDos.nombre
    }

    arregloEstudiantes.push(nuevoRegistro);

    console.log('¿Cual usuario editar?')
    
    console.log(arregloEstudiantes);

    //OPERADORES!! -> REEMPLAZAR AL FOR!
    
    const idBuscar = await prompts({

        type: 'number',
        name: 'id',
        message: 'ingrese el id del registro a Editar'

    })

    const indiceEncontrado = arregloEstudiantes.findIndex(  //return CONDICION -> 
        function (valorActual, indice, arreglo){

            //console.log(valorActual);
            //console.log(indice);
            //console.log(arreglo);

            return valorActual.id == idBuscar.id;  //Nos devuelve el Indice

        } //SI SE ENCUENTRA NOS DEVUELVE EL INDICE
          //NO ENCUENTRA
    )
    console.log('indice encontrado: ', indiceEncontrado);

    const nombreEditar = await prompts({

        type: 'text',
        name: 'nombre',
        message: 'ingrese el nuevo nombre'

    });

    arregloEstudiantes[indiceEncontrado].nombre = nombreEditar.nombre;
    console.log(arregloEstudiantes);


    const buscar = await prompts({

        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'

    });

    const estudianteEncontrado = arregloEstudiantes
                .find(
                    function(valorActual){
                        return valorActual.nombre == buscar.nombre;
                    }
                );
    console.log(estudianteEncontrado);

    //JSON.stringify -> convierte objeto o arreglo en memoria
    const arregloTexto = JSON.stringify(arregloEstudiantes);
    console.log(arregloTexto);
    escribirArchivo('./ejemplo.txt', arregloTexto);




    

    

    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'Tengo Hambre :( \n' + textoLeido;
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */


}

main();

//Parsear -> Texto -> estructura en memoria

/*
{
    "nombre": "Daniel"
}

*/




