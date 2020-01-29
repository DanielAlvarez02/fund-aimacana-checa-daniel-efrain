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
var _01_funcion_opcion_1 = require("./01-funcion-opcion");
var _06_funcion_agregar_1 = require("./06-funcion-agregar");
var _09_funcion_await_1 = require("./09-funcion-await");
var _11_funcion_imprimir_1 = require("./11-funcion-imprimir");
var _04_funcion_buscar_1 = require("./04-funcion-buscar");
var _07_eliminar_pelicula_1 = require("./07-eliminar-pelicula");
var _05_funcion_editar_directorio_1 = require("./05-funcion-editar-directorio");
function menu(directorio) {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\nEscoga una opcion\n");
                    console.log("1.Buscar");
                    console.log("2.Editar");
                    console.log("3.Eliminar");
                    console.log("4.Agregar");
                    console.log("5.Salir\n");
                    return [4 /*yield*/, _01_funcion_opcion_1.funcionOpcion()];
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
                case 2: return [4 /*yield*/, _04_funcion_buscar_1.buscar(directorio)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, _09_funcion_await_1.esperear()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, menu(directorio)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 6: return [4 /*yield*/, _05_funcion_editar_directorio_1.editarDirectorio(directorio)];
                case 7:
                    directorio = _b.sent();
                    console.log("\nSus canciones son\n");
                    return [4 /*yield*/, _11_funcion_imprimir_1.imprimir(directorio)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, _09_funcion_await_1.esperear()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, menu(directorio)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 11: return [4 /*yield*/, _07_eliminar_pelicula_1.eliminar(directorio)];
                case 12:
                    directorio = _b.sent();
                    console.log("\nSus canciones son:\n");
                    return [4 /*yield*/, _11_funcion_imprimir_1.imprimir(directorio)];
                case 13:
                    _b.sent();
                    return [4 /*yield*/, _09_funcion_await_1.esperear()];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, menu(directorio)];
                case 15:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 16: return [4 /*yield*/, _06_funcion_agregar_1.agregar(directorio)];
                case 17:
                    directorio = _b.sent();
                    console.log("\nSus canciones son:\n");
                    return [4 /*yield*/, _11_funcion_imprimir_1.imprimir(directorio)];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, _09_funcion_await_1.esperear()];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, menu(directorio)];
                case 20:
                    _b.sent();
                    return [3 /*break*/, 22];
                case 21:
                    console.log("\nchao");
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    });
}
exports.menu = menu;
