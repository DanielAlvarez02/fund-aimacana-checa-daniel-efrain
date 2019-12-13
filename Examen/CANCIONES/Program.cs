using System;

namespace CANCIONES
{
    class Program
    {
        static string[] Agregar(string[] canciones)
        {
            Console.Write("Ingrese el nombre de la canción que añadirá: ");
            string nuevaCancion = Console.ReadLine();
            string[] cancion2 = new string[canciones.Length + 1];

            for (int i = 0; i < canciones.Length; i++)
            {
                cancion2[i] = canciones[i];
            }

            cancion2[canciones.Length] = nuevaCancion;

            Console.WriteLine("El nuevo menu es:");

            for (int i = 0, j = 1; i < cancion2.Length; i++, j++)
            {
                Console.WriteLine(j + ". " + cancion2[i]);
            }

            return cancion2;
        }

        static string[] Eliminar(string[] canciones)
        {
            Console.Write("Ingrese la cancion que desea eliminar: ");
            string cancionEliminada = Console.ReadLine();
            string[] cancion2 = new string[canciones.Length - 1];

            for (int i = 0; i < canciones.Length; i++)
            {
                if (canciones[i] != cancionEliminada)
                {
                    if (i < cancion2.Length)
                    {
                        cancion2[i] = canciones[i];
                    }
                    else
                    {
                        cancion2[i - 1] = canciones[i];
                    }
                }
                else
                {
                    
                    if (canciones[canciones.Length - 1] != cancionEliminada)
                    {
                        do
                        {
                            i++;
                            if (canciones[i] != cancionEliminada)
                            {

                                cancion2[i - 1] = canciones[i];

                            }
                        } while (i < cancion2.Length);
                    }
                }
            }

            Console.WriteLine("El nuevo menu es:");

            for (int i = 0, j = 1; i < cancion2.Length; i++, j++)
            {
                Console.WriteLine(j + ". " + cancion2[i]);
            }

            return cancion2;
        }

        static string[] Editar(string[] canciones)
        {
            Console.Write("Cual cancion desea editar: ");
            string editar = Console.ReadLine();

            for (int i = 0; i < canciones.Length; i++)
            {
                if (canciones[i] == editar)
                {
                    Console.Write("Ingrese la nueva cancion: ");
                    string nuevaCancion = Console.ReadLine();
                    canciones[i] = nuevaCancion;
                }
            }

            Console.WriteLine("El nuevo menu es:");

            for (int i = 0, j = 1; i < canciones.Length; i++, j++)
            {
                Console.WriteLine(j + ". " + canciones[i]);
            }

            return canciones;
        }

        static void Menu(string[] canciones)
        {
            Console.WriteLine("Que desea modificar de sus cacnciones?");
            Console.WriteLine("1. Agregar nueva canción");
            Console.WriteLine("2. Eliminar ");
            Console.WriteLine("3. Ver menu");
            Console.WriteLine("4. Modificar");
            Console.WriteLine("5. Salir");
            Console.Write("Eliga una opcion: ");
            string opcion = Console.ReadLine();
            bool esAgregar = opcion == "1";
            bool esEliminar = opcion == "2";
            bool esVer = opcion == "3";
            bool esEditar = opcion == "4";
            bool esSalir = opcion == "5";
            bool ok = esAgregar || esEliminar || esVer || esEditar;
            if (ok)
            {
                if (esAgregar)
                {
                    canciones = Agregar(canciones);
                    Console.Write("Presione ENTER para continuar...");
                    Console.ReadKey();
                    Menu(canciones);
                }
                else
                {
                    if (esEliminar)
                    {
                        canciones = Eliminar(canciones);
                        Console.Write("Presione ENTER para continuar...");
                        Console.ReadKey();
                        Menu(canciones);
                    }
                    else
                    {
                        if (esVer)
                        {
                            Console.Write("El menu actual es:");
                            for (int i = 0, j = 1; i < canciones.Length; i++, j++)
                            {
                                Console.WriteLine(j + ". " + canciones[i]);
                            }
                            Console.Write("Presione ENTER para continuar...");
                            Console.ReadKey();
                            Menu(canciones);
                        }
                        else
                        {
                            canciones = Editar(canciones);
                            Console.Write("Presione ENTER para continuar...");
                            Console.ReadKey();
                            Menu(canciones);
                        }
                    }
                }
            }
            else
            {
                if (esSalir)
                {
                    Console.WriteLine("Gracias.");
                }
                else
                {
                    Console.WriteLine("Asegurese de que la opcion que escogio sea correcta");
                    Menu(canciones);
                }
            }
        }
        static void Main(string[] args)
        {
            Console.Write("Cuantas canciones te gustan : ");
            int tamanio = int.Parse(Console.ReadLine());
            string[] canciones = new string[tamanio];
            for (int i = 0, j = 1; i < tamanio; i++, j++)
            {
                Console.Write($"Ingrese el numero de la canción {j}: ");
                canciones[i] = Console.ReadLine();
            }
            Menu(canciones);
        }
    }
}
