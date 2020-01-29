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
var _01_funcion_opcion_1 = require("./01-funcion-opcion");
var _14_imprimir_objeto_1 = require("./14-imprimir-objeto");
function editar(cancion) {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, _a, nuevoNombre, nuevoGenero, nuevoAutor, nuevoAlbum, nuevoAnio;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\nDe la canción " + cancion.cancion + "Que va a editar:\n");
                    console.log('Nombre:\t\t', cancion.cancion);
                    console.log('Autor:\t', cancion.autor);
                    console.log('Genero:\t\t', cancion.genero);
                    console.log('Album:\t', cancion.album);
                    console.log('Año:\t', cancion.año);
                    return [4 /*yield*/, _01_funcion_opcion_1.funcionOpcion()];
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
                        message: 'Ingrese el nuevo nombre:'
                    })];
                case 3:
                    nuevoNombre = _b.sent();
                    cancion.cancion = nuevoNombre.nuevoNombre;
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
                        name: 'nuevoAutor',
                        message: 'Ingrese el nuevo autor:'
                    })];
                case 7:
                    nuevoAutor = _b.sent();
                    cancion.autor = nuevoAutor.nuevoAutor;
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
                    cancion.año = nuevoAnio.nuevoAnio;
                    return [3 /*break*/, 12];
                case 12:
                    console.log("\nLa pelicula editada es:");
                    return [4 /*yield*/, _14_imprimir_objeto_1.imprimir(cancion)];
                case 13:
                    _b.sent();
                    return [2 /*return*/, cancion];
            }
        });
    });
}
exports.editar = editar;
