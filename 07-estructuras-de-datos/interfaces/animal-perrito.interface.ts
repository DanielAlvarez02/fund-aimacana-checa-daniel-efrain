import {duenio} from './duenio.interface';

export interface   AnimalPerrito { //interface -> (struct)
    nombreCientifico: string;
    nombre: string;
    clan: string //A cualquier propiedad de la estructura se puede poner "null"
    edad?: number;
    hijos?: boolean;
    perritas?: string[];
    vacunado?: boolean;
    duenio?: duenio;
}
