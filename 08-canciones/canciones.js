"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
function main() {
    datosCanciones();
    elegirOpcion();
    crear();
    espero();
}
function datosCanciones() {
    return __awaiter(this, void 0, void 0, function () {
        var preguntas, canciones;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preguntas = [
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
                    return [4 /*yield*/, prompts(preguntas)];
                case 1:
                    canciones = _a.sent();
                    return [2 /*return*/, canciones];
            }
        });
    });
}
function elegirOpcion() {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, respuesta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opcion = {
                        type: 'number',
                        name: 'Opcion',
                        message: 'Elija un numero a realizar:',
                        validate: function (value) { return (value < 0 || value > 5) ? "Debe escoger unicamente los n\u00FAmeros existentes" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 1:
                    respuesta = _a.sent();
                    return [2 /*return*/, respuesta];
            }
        });
    });
}
function crear() {
    return __awaiter(this, void 0, void 0, function () {
        var primeraCancion, cancion1, numeroDeCanciones, datosDeLaCancion, i, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    primeraCancion = {
                        type: 'number',
                        name: 'opcion',
                        message: '¿Cuantas canciones quieres agregar?',
                        validate: function (value) { return value < 0 ? 'aaaaaaa' : true; }
                    };
                    return [4 /*yield*/, prompts(primeraCancion)];
                case 1:
                    cancion1 = _c.sent();
                    numeroDeCanciones = cancion1.opcion;
                    datosDeLaCancion = [];
                    i = 0;
                    _c.label = 2;
                case 2:
                    if (!(i < numeroDeCanciones)) return [3 /*break*/, 5];
                    _a = datosDeLaCancion;
                    _b = i;
                    return [4 /*yield*/, datosCanciones()];
                case 3:
                    _a[_b] = _c.sent();
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("El directorio creado es:");
                    return [4 /*yield*/, imprimir(datosDeLaCancion)];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, espero()];
                case 7:
                    _c.sent();
                    return [2 /*return*/, datosDeLaCancion];
            }
        });
    });
}
function buscar(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var buscar, opcion, opcionRespuesta, numeroDeOpcion, _a, indiceEncontrado, peliculaEncontrada;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, tabla(estructura)];
                case 1:
                    buscar = _b.sent();
                    console.log('\n¿Como desea buscar?\n');
                    console.log('1.indice de la cancion.');
                    console.log('2.Nombre de la cancion.\n');
                    opcion = {
                        type: 'number',
                        name: 'opcion',
                        message: 'Escoge una opcion:',
                        validate: function (value) { return (value < 0 || value > 2) ? "Escoger las opciones existentes" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 2:
                    opcionRespuesta = _b.sent();
                    numeroDeOpcion = opcionRespuesta.opcion;
                    _a = numeroDeOpcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, buscarCancionesPorIndice(buscar)];
                case 4:
                    indiceEncontrado = _b.sent();
                    return [4 /*yield*/, imprimirObjeto(estructura[indiceEncontrado])];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 6: return [4 /*yield*/, buscarCancionesPorNombre(estructura)];
                case 7:
                    peliculaEncontrada = _b.sent();
                    return [4 /*yield*/, imprimirObjeto(peliculaEncontrada)];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function editarLaEstructura(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var buscar, opcion, opcionRespuesta, numeroDeOpcion, _a, indiceEncontrado, _b, _c, cancionEncontrada_1, indiceCancionEncontrada, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, tabla(estructura)];
                case 1:
                    buscar = _f.sent();
                    console.log('\n¿Como desea buscar?\n');
                    console.log('1.Por indice de la cancion o ');
                    console.log('2.Nombre de la cancion.\n');
                    opcion = {
                        type: 'number',
                        name: 'opcion',
                        message: 'Escoge una opcion:',
                        validate: function (value) { return (value < 0 || value > 2) ? "Escoger las opciones existentes" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 2:
                    opcionRespuesta = _f.sent();
                    numeroDeOpcion = opcionRespuesta.opcion;
                    _a = numeroDeOpcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, buscarCancionesPorIndice(buscar)];
                case 4:
                    indiceEncontrado = _f.sent();
                    _b = estructura;
                    _c = indiceEncontrado;
                    return [4 /*yield*/, editarCancion(estructura[indiceEncontrado])];
                case 5:
                    _b[_c] = _f.sent();
                    return [3 /*break*/, 9];
                case 6: return [4 /*yield*/, buscarCancionesPorNombre(estructura)];
                case 7:
                    cancionEncontrada_1 = _f.sent();
                    indiceCancionEncontrada = estructura.findIndex(function (valorActual, indice) {
                        if (valorActual.cancion == cancionEncontrada_1.cancion) {
                            return indice;
                        }
                    });
                    _d = estructura;
                    _e = indiceCancionEncontrada;
                    return [4 /*yield*/, editarCancion(estructura[indiceCancionEncontrada])];
                case 8:
                    _d[_e] = _f.sent();
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/, estructura];
            }
        });
    });
}
function agregarCancion(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var nuevaCancion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, datosCanciones()];
                case 1:
                    nuevaCancion = _a.sent();
                    estructura.push(nuevaCancion);
                    return [2 /*return*/, estructura];
            }
        });
    });
}
function eliminar(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var tablaCancionesBuscar, opcion, opcionRespuesta, numeroDeOpcion, _a, indiceEncontrado, cancionEncontrada_2, indiceCancionEncontrada;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, tabla(estructura)];
                case 1:
                    tablaCancionesBuscar = _b.sent();
                    console.log('\n¿Como desea buscar la canción?\n');
                    console.log('1.Por el indice de la canción o ');
                    console.log('2.el nombre de la canción.\n');
                    opcion = {
                        type: 'number',
                        name: 'opcion',
                        message: 'Escoge una opcion:',
                        validate: function (value) { return (value < 0 || value > 2) ? "Escoger solo las opciones existentes" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 2:
                    opcionRespuesta = _b.sent();
                    numeroDeOpcion = opcionRespuesta.opcion;
                    _a = numeroDeOpcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, buscarCancionesPorIndice(tablaCancionesBuscar)];
                case 4:
                    indiceEncontrado = _b.sent();
                    estructura.splice(indiceEncontrado, 1);
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, buscarCancionesPorNombre(estructura)];
                case 6:
                    cancionEncontrada_2 = _b.sent();
                    indiceCancionEncontrada = estructura.findIndex(function (valorActual, indice) {
                        if (valorActual.cancion == cancionEncontrada_2.cancion) {
                            return indice;
                        }
                    });
                    estructura.splice(indiceCancionEncontrada, 1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, estructura];
            }
        });
    });
}
function menu(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\nEscoger la opcion a realizar\n");
                    console.log("1.Buscar en la estructura");
                    console.log("2.Editar la estructura");
                    console.log("3.Eliminar una cacnion");
                    console.log("4.Agregar una cancion");
                    console.log("5.Salir\n");
                    return [4 /*yield*/, elegirOpcion()];
                case 1:
                    opcion = _b.sent();
                    _a = opcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 6];
                        case 3: return [3 /*break*/, 11];
                        case 4: return [3 /*break*/, 16];
                    }
                    return [3 /*break*/, 21];
                case 2: return [4 /*yield*/, buscar(estructura)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, espero()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, menu(estructura)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 6: return [4 /*yield*/, editarLaEstructura(estructura)];
                case 7:
                    estructura = _b.sent();
                    console.log("\nLas canciones son:\n");
                    return [4 /*yield*/, imprimir(estructura)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, espero()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, menu(estructura)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 11: return [4 /*yield*/, eliminar(estructura)];
                case 12:
                    estructura = _b.sent();
                    console.log("\nLas cacnciones son:\n");
                    return [4 /*yield*/, imprimir(estructura)];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, espero()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, menu(estructura)];
                case 15:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 16: return [4 /*yield*/, agregarCancion(estructura)];
                case 17:
                    estructura = _b.sent();
                    console.log("\nLas cacniones son:\n");
                    return [4 /*yield*/, imprimir(estructura)];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, espero()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, menu(estructura)];
                case 20:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 21: return [2 /*return*/, "gracias"];
                case 22: return [2 /*return*/];
            }
        });
    });
}
function espero() {
    return __awaiter(this, void 0, void 0, function () {
        var espero, esperarRespuesta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    espero = {
                        type: 'text',
                        nombre: 'espero',
                        message: 'Para continuar ponga enter'
                    };
                    return [4 /*yield*/, prompts(espero)];
                case 1:
                    esperarRespuesta = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function tabla(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var longitud, tablaCanciones, i;
        return __generator(this, function (_a) {
            longitud = estructura.length;
            tablaCanciones = [];
            for (i = 1; i <= longitud; i++) {
                tablaCanciones[i - 1] =
                    {
                        id: i,
                        nombre: estructura[i - 1].cancion
                    };
            }
            return [2 /*return*/, tablaCanciones];
        });
    });
}
function imprimir(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var longitud, i;
        return __generator(this, function (_a) {
            longitud = estructura.length;
            console.log('Posicion\t Nombre');
            for (i = 1; i <= longitud; i++) {
                console.log("   " + i + ".\t\t", estructura[i - 1].cancion + ".");
            }
            return [2 /*return*/];
        });
    });
}
function buscarCancionesPorIndice(tablaCanciones) {
    return __awaiter(this, void 0, void 0, function () {
        var idABuscar, indiceEncontrado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'id',
                        message: "Ingresa el indice de la cancion para buscarla:",
                        validate: function (value) { return (value < 0 || value > tabla.length) ? "Esa cancion no existe" : true; }
                    })];
                case 1:
                    idABuscar = _a.sent();
                    indiceEncontrado = tabla.findIndex(function (valorActual, indice, arreglo) {
                        return valorActual.id == idABuscar.id;
                    });
                    return [2 /*return*/, indiceEncontrado];
            }
        });
    });
}
function buscarCancionesPorNombre(estructura) {
    return __awaiter(this, void 0, void 0, function () {
        var buscar, cancionEncontrada;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nombre',
                        message: "Ingresa el nombre de la cancion a buscar:",
                    })];
                case 1:
                    buscar = _a.sent();
                    cancionEncontrada = estructura.find(function (valorActual) {
                        return valorActual.cancion == buscar.nombre;
                    });
                    return [2 /*return*/, cancionEncontrada];
            }
        });
    });
}
function imprimirObjeto(cancion) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('Nombre:\t\t', cancion.cancion);
            console.log('Genero:\t', cancion.genero);
            console.log('Autor:\t\t', cancion.autor);
            console.log('Album:\t', cancion.album);
            console.log('Año:\t', cancion.anio);
            return [2 /*return*/];
        });
    });
}
function editarCancion(cancion) {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, _a, nuevaCancion, nuevoGenero, nuevoAutor, nuevoAlbum, nuevoAnio;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\nDe la cancion " + cancion.cancion + "Que desea editar:\n");
                    console.log('1.Nombre:\t', cancion.cancion);
                    console.log('2.Genero:\t', cancion.genero);
                    console.log('3.Album:\t', cancion.album);
                    console.log('4.Autor:\t', cancion.autor);
                    console.log('4.Año:\t', cancion.anio);
                    return [4 /*yield*/, elegirOpcion()];
                case 1:
                    opcion = _b.sent();
                    _a = opcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 4];
                        case 3: return [3 /*break*/, 6];
                        case 4: return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 10];
                case 2: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nuevoNombre',
                        message: 'Ingrese la nueva cancion:'
                    })];
                case 3:
                    nuevaCancion = _b.sent();
                    cancion.cancion = nuevaCancion.nuevoNombre;
                    return [3 /*break*/, 12];
                case 4: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nuevoGenero',
                        message: 'Ingrese el nuevo genero:'
                    })];
                case 5:
                    nuevoGenero = _b.sent();
                    cancion.genero = nuevoGenero.nuevoGenero;
                    return [3 /*break*/, 12];
                case 6: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'autor',
                        message: 'Ingrese el nuevo director:'
                    })];
                case 7:
                    nuevoAutor = _b.sent();
                    cancion.autor = nuevoAutor.autor;
                    return [3 /*break*/, 12];
                case 8: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nuevoAlbum',
                        message: 'Ingrese el nuevo protagonista:'
                    })];
                case 9:
                    nuevoAlbum = _b.sent();
                    cancion.album = nuevoAlbum.nuevoAlbum;
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nuevoAnio',
                        message: 'Ingrese la nueva duracion:'
                    })];
                case 11:
                    nuevoAnio = _b.sent();
                    cancion.anio = nuevoAnio.nuevoAnio;
                    return [3 /*break*/, 12];
                case 12:
                    console.log("\nLa cancion editada es:");
                    return [4 /*yield*/, imprimirObjeto(cancion)];
                case 13:
                    _b.sent();
                    return [2 /*return*/, cancion];
            }
        });
    });
}
exports.editarCancion = editarCancion;
