//02-crud.ts create read update delete 

//const prompts = require ('prompts');

import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimaLPerrito();
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
main();