import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./escribir-archivo";
import {Estudiante} from "./interfaces/estudiante.interaface";
import * as prompts from 'prompts';

async function main(){

    let contador = 1;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );

    const arregloCargadoArchivo = JSON.parse(contenidoArchivo);
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

    console.log('¿Cula usuario editar?')
    
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




    

    

    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'Tengo Hambre :( \n' + textoLeido;
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */


}

main();


