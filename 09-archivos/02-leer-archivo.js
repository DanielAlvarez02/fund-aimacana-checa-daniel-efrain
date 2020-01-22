"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    console.log('leer archivo');
    var resultado = fs.readFileSync(path, //Path
    'utf-8' //CODIFICACION
    );
    console.log(resultado); // Hola amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
