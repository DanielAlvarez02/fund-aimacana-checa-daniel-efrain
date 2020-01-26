import {AnimalPerrito} from './animal-perrito.interface';

export interface   duenio { //interface -> (struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaNacimiento: number;
    mascotasPerros?: AnimalPerrito[];
    
}