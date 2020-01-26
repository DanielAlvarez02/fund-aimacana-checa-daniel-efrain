//02-crud.ts create read update delete 

//const prompts = require ('prompts');

import * as prompts from 'prompts';
import { RespuestaEdad } from './interfaces/respuesta-edad.interface';
import { RespuestaNombre } from './interfaces/respuesta-nombre.interface';
import { repuetaPreguntas } from './interfaces/respuesta-pregunta.interface';

function main(){
    //obtenerDatosAnimaLPerrito(); //Asincrona
    obtenerDatosAnimaLPerritoSincrono()
    .then()
    .catch(); // ->Promesa // Sincrona
}

function obtenerDatosAnimaLPerrito(){

    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');

    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad?'
    })
    console.log(promesaEdad);
    promesaEdad
    .then( //0k
        (datos)=>{
            console.log('datos', datos); //puedo seguir

            ///
            const promesaNombre = prompts({
                type: 'text',
                name: 'nombre',
                message: 'puedes darme tu nombre?'
            });
            promesaNombre
            .then( //0k
                (datosNombre)=>{
                    console.log('Nombre', datosNombre); //puedo seguir
                }
            )
            .catch( // =(
                (error)=>{
                    console.log('error',error);
                }
            );
            ///
        }
    )
    .catch( // =(
        (error)=>{
            console.log('error',error);
        }
    );

    console.log('Fin');


}




async function obtenerDatosAnimaLPerritoSincrono(){

    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');

    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'puedes darme tu cédula?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre?'
        }
    ]
    const hola: repuetaPreguntas = await prompts(preguntas);
    console.log('Respuesta', hola);
    console.log('Fin');  
}

main();



