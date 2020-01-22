import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./escribir-archivo";

function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'Tengo Hambre :( \n' + textoLeido;
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
}

main();
