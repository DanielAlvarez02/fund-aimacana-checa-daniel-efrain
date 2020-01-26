import * as fs from 'fs';

export function leerArchivo(path: string): string { 
    console.log('leer archivo');
    const resultado = fs.readFileSync(
        path,//Path
        'utf-8' //CODIFICACION
        );
        console.log(resultado); // Hola amigos
        return resultado;
}