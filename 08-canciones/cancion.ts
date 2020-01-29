import { menu } from "./estructura-canciones/08-funcion-menu";
import { crear } from "./estructura-canciones/03-funcion-crear";

async function main()
{
    const directorio = await crear(); 
    await menu(directorio);
}
main();