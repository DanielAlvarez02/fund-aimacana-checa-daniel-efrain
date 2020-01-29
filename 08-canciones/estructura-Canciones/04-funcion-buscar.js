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
var _10_funcion_tabla_1 = require("./10-funcion-tabla");
var _12_buscar_por_indice_1 = require("./12-buscar-por-indice");
var _13_buscar_por_nombre_1 = require("./13-buscar-por-nombre");
var _14_imprimir_objeto_1 = require("./14-imprimir-objeto");
function buscar(directorio) {
    return __awaiter(this, void 0, void 0, function () {
        var tablaCancionesBuscar, opcion, opcionRespuesta, numeroDeOpcion, _a, indiceEncontrado, cancionEncontrada;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _10_funcion_tabla_1.realizarTabla(directorio)];
                case 1:
                    tablaCancionesBuscar = _b.sent();
                    console.log('\n¿Cómo desea buscar?:\n');
                    console.log('1.Por indice de la canción.');
                    console.log('2.Nombre de la canción.\n');
                    opcion = {
                        type: 'number',
                        name: 'numeroDeOpcion',
                        message: 'Escoge una opcion:',
                        validate: function (value) { return (value < 0 || value > 2) ? "Escoger las opciones existentes" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 2:
                    opcionRespuesta = _b.sent();
                    numeroDeOpcion = opcionRespuesta.numeroDeOpcion;
                    _a = numeroDeOpcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, _12_buscar_por_indice_1.buscarCancionPorIndice(tablaCancionesBuscar)];
                case 4:
                    indiceEncontrado = _b.sent();
                    return [4 /*yield*/, _14_imprimir_objeto_1.imprimir(directorio[indiceEncontrado])];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 6: return [4 /*yield*/, _13_buscar_por_nombre_1.buscarCancionPorNombre(directorio)];
                case 7:
                    cancionEncontrada = _b.sent();
                    return [4 /*yield*/, _14_imprimir_objeto_1.imprimir(cancionEncontrada)];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.buscar = buscar;
