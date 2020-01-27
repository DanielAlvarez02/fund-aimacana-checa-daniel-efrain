var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as prompts from 'prompts';
function main() {
    datosCanciones();
    elegirOpcion();
    crear();
    espero();
}
function datosCanciones() {
    return __awaiter(this, void 0, void 0, function* () {
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
        ];
        const canciones = yield prompts(preguntas);
        return canciones;
    });
}
function elegirOpcion() {
    return __awaiter(this, void 0, void 0, function* () {
        const opcion = {
            type: 'number',
            name: 'Opcion',
            message: 'Elija un numero a realizar:',
            validate: value => (value < 0 || value > 5) ? `Debe escoger unicamente los números existentes` : true
        };
        const respuesta = yield prompts(opcion);
        return respuesta;
    });
}
function crear() {
    return __awaiter(this, void 0, void 0, function* () {
        const primeraCancion = {
            type: 'number',
            name: 'opcion',
            message: '¿Cuantas canciones quieres agregar?',
            validate: value => value < 0 ? 'aaaaaaa' : true
        };
        const cancion1 = yield prompts(primeraCancion);
        const numeroDeCanciones = cancion1.opcion;
        const datosDeLaCancion = [];
        for (let i = 0; i < numeroDeCanciones; i++) {
            datosDeLaCancion[i] = yield datosCanciones();
        }
        console.log("El directorio creado es:");
        yield imprimir(datosDeLaCancion);
        yield espero();
        return datosDeLaCancion;
    });
}
function buscar(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const buscar = yield tabla(estructura);
        console.log('\n¿Como desea buscar?\n');
        console.log('1.indice de la cancion.');
        console.log('2.Nombre de la cancion.\n');
        const opcion = {
            type: 'number',
            name: 'opcion',
            message: 'Escoge una opcion:',
            validate: value => (value < 0 || value > 2) ? `Escoger las opciones existentes` : true
        };
        const opcionRespuesta = yield prompts(opcion);
        const numeroDeOpcion = opcionRespuesta.opcion;
        switch (numeroDeOpcion) {
            case 1:
                const indiceEncontrado = yield buscarCancionesPorIndice(buscar);
                yield imprimirObjeto(estructura[indiceEncontrado]);
                break;
            case 2:
                const peliculaEncontrada = yield buscarCancionesPorNombre(estructura);
                yield imprimirObjeto(peliculaEncontrada);
                break;
        }
    });
}
function editarLaEstructura(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const buscar = yield tabla(estructura);
        console.log('\n¿Como desea buscar?\n');
        console.log('1.Por indice de la cancion o ');
        console.log('2.Nombre de la cancion.\n');
        const opcion = {
            type: 'number',
            name: 'opcion',
            message: 'Escoge una opcion:',
            validate: value => (value < 0 || value > 2) ? `Escoger las opciones existentes` : true
        };
        const opcionRespuesta = yield prompts(opcion);
        const numeroDeOpcion = opcionRespuesta.opcion;
        switch (numeroDeOpcion) {
            case 1:
                const indiceEncontrado = yield buscarCancionesPorIndice(buscar);
                estructura[indiceEncontrado] = yield editarCancion(estructura[indiceEncontrado]);
                break;
            case 2:
                const cancionEncontrada = yield buscarCancionesPorNombre(estructura);
                const indiceCancionEncontrada = estructura.findIndex(function (valorActual, indice) {
                    if (valorActual.cancion == cancionEncontrada.cancion) {
                        return indice;
                    }
                });
                estructura[indiceCancionEncontrada] = yield editarCancion(estructura[indiceCancionEncontrada]);
                break;
        }
        return estructura;
    });
}
function agregarCancion(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const nuevaCancion = yield datosCanciones();
        estructura.push(nuevaCancion);
        return estructura;
    });
}
function eliminar(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const tablaCancionesBuscar = yield tabla(estructura);
        console.log('\n¿Como desea buscar la canción?\n');
        console.log('1.Por el indice de la canción o ');
        console.log('2.el nombre de la canción.\n');
        const opcion = {
            type: 'number',
            name: 'opcion',
            message: 'Escoge una opcion:',
            validate: value => (value < 0 || value > 2) ? `Escoger solo las opciones existentes` : true
        };
        const opcionRespuesta = yield prompts(opcion);
        const numeroDeOpcion = opcionRespuesta.opcion;
        switch (numeroDeOpcion) {
            case 1:
                const indiceEncontrado = yield buscarCancionesPorIndice(tablaCancionesBuscar);
                estructura.splice(indiceEncontrado, 1);
                break;
            case 2:
                const cancionEncontrada = yield buscarCancionesPorNombre(estructura);
                const indiceCancionEncontrada = estructura.findIndex(function (valorActual, indice) {
                    if (valorActual.cancion == cancionEncontrada.cancion) {
                        return indice;
                    }
                });
                estructura.splice(indiceCancionEncontrada, 1);
                break;
        }
        return estructura;
    });
}
function menu(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\nEscoger la opcion a realizar\n");
        console.log("1.Buscar en la estructura");
        console.log("2.Editar la estructura");
        console.log("3.Eliminar una cacnion");
        console.log("4.Agregar una cancion");
        console.log("5.Salir\n");
        const opcion = yield elegirOpcion();
        switch (opcion) {
            case 1:
                yield buscar(estructura);
                yield espero();
                yield menu(estructura);
                break;
            case 2:
                estructura = yield editarLaEstructura(estructura);
                console.log("\nLas canciones son:\n");
                yield imprimir(estructura);
                yield espero();
                yield menu(estructura);
                break;
            case 3:
                estructura = yield eliminar(estructura);
                console.log("\nLas cacnciones son:\n");
                yield imprimir(estructura);
                yield espero();
                yield menu(estructura);
                break;
            case 4:
                estructura = yield agregarCancion(estructura);
                console.log("\nLas cacniones son:\n");
                yield imprimir(estructura);
                yield espero();
                yield menu(estructura);
                break;
            default:
                return "gracias";
                break;
        }
    });
}
function espero() {
    return __awaiter(this, void 0, void 0, function* () {
        const espero = {
            type: 'text',
            nombre: 'espero',
            message: 'Para continuar ponga enter'
        };
        const esperarRespuesta = yield prompts(espero);
    });
}
function tabla(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const longitud = estructura.length;
        const tablaCanciones = [];
        for (let i = 1; i <= longitud; i++) {
            tablaCanciones[i - 1] =
                {
                    id: i,
                    nombre: estructura[i - 1].cancion
                };
        }
        return tablaCanciones;
    });
}
function imprimir(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const longitud = estructura.length;
        console.log('Posicion\t Nombre');
        for (let i = 1; i <= longitud; i++) {
            console.log("   " + i + ".\t\t", estructura[i - 1].cancion + ".");
        }
    });
}
function buscarCancionesPorIndice(tablaCanciones) {
    return __awaiter(this, void 0, void 0, function* () {
        const idABuscar = yield prompts({
            type: 'number',
            name: 'id',
            message: "Ingresa el indice de la cancion para buscarla:",
            validate: value => (value < 0 || value > tabla.length) ? `Esa cancion no existe` : true
        });
        const indiceEncontrado = tabla.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == idABuscar.id;
        });
        return indiceEncontrado;
    });
}
function buscarCancionesPorNombre(estructura) {
    return __awaiter(this, void 0, void 0, function* () {
        const buscar = yield prompts({
            type: 'text',
            name: 'nombre',
            message: "Ingresa el nombre de la cancion a buscar:",
        });
        const cancionEncontrada = estructura.find(function (valorActual) {
            return valorActual.cancion == buscar.nombre;
        });
        return cancionEncontrada;
    });
}
function imprimirObjeto(cancion) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Nombre:\t\t', cancion.cancion);
        console.log('Genero:\t', cancion.genero);
        console.log('Autor:\t\t', cancion.autor);
        console.log('Album:\t', cancion.album);
        console.log('Año:\t', cancion.anio);
    });
}
export function editarCancion(cancion) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\nDe la cancion " + cancion.cancion + "Que desea editar:\n");
        console.log('1.Nombre:\t', cancion.cancion);
        console.log('2.Genero:\t', cancion.genero);
        console.log('3.Album:\t', cancion.album);
        console.log('4.Autor:\t', cancion.autor);
        console.log('4.Año:\t', cancion.anio);
        const opcion = yield elegirOpcion();
        switch (opcion) {
            case 1:
                const nuevaCancion = yield prompts({
                    type: 'text',
                    name: 'nuevoNombre',
                    message: 'Ingrese la nueva cancion:'
                });
                cancion.cancion = nuevaCancion.nuevoNombre;
                break;
            case 2:
                const nuevoGenero = yield prompts({
                    type: 'text',
                    name: 'nuevoGenero',
                    message: 'Ingrese el nuevo genero:'
                });
                cancion.genero = nuevoGenero.nuevoGenero;
                break;
            case 3:
                const nuevoAutor = yield prompts({
                    type: 'text',
                    name: 'autor',
                    message: 'Ingrese el nuevo director:'
                });
                cancion.autor = nuevoAutor.autor;
                break;
            case 4:
                const nuevoAlbum = yield prompts({
                    type: 'text',
                    name: 'nuevoAlbum',
                    message: 'Ingrese el nuevo protagonista:'
                });
                cancion.album = nuevoAlbum.nuevoAlbum;
                break;
            default:
                const nuevoAnio = yield prompts({
                    type: 'text',
                    name: 'nuevoAnio',
                    message: 'Ingrese la nueva duracion:'
                });
                cancion.anio = nuevoAnio.nuevoAnio;
                break;
        }
        console.log("\nLa cancion editada es:");
        yield imprimirObjeto(cancion);
        return cancion;
    });
}
