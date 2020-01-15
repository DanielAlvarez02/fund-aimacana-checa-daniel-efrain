"use strict";
//02-crud.ts create read update delete 
exports.__esModule = true;
//const prompts = require ('prompts');
var prompts = require("prompts");
function main() {
    obtenerDatosAnimaLPerrito();
}
function obtenerDatosAnimaLPerrito() {
    //Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(//0k
    function (datos) {
        console.log('datos', datos); //puedo seguir
        ///
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre?'
        });
        promesaNombre
            .then(//0k
        function (datosNombre) {
            console.log('Nombre', datosNombre); //puedo seguir
        })["catch"](// =(
        function (error) {
            console.log('error', error);
        });
        ///
    })["catch"](// =(
    function (error) {
        console.log('error', error);
    });
    console.log('Fin');
}
main();
