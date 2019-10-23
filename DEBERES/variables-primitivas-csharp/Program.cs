using System;
/* Nombre: Daniel Aimacaña
 * FECHA DE ACTUALIZACIÓN: 22/10/2019
 * DESCRIPCIÓN: EJEMPLOS DE VARIABLES PRIMITIVAS EN C# 
 */

// Primitivas de c#
/*
 * byte     -> 0 hasta 255                               Ej: 0 o 120 o 255
 * int      -> ENTEROS -2147,483,648 hasta 2147,483,647  Ej: -4 o 0 o 3
 * double   -> DECIMALES                                 Ej: 2.34 o 3.90
 * bool     -> VERDADERO O FALSO                         Ej; true or false
 * char     -> caracter solo 1                           Ej: 'c' o 'b'
 * string   -> cadenas de caracteres                     Ej: "mi perro es lindo"
 * dinamic  -> adivina que tipo de dato usas (no recomendable)
 */
 console.WriteLine
namespace variables_primitivas_csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            byte variable = 30;
            Console.WriteLine("el valor de la variable el ")  + variable;
            Console.ReadKey();
            int x = 239;
            Console.WriteLine("el valor de x es " + x);
            Console.ReadKey();
            double precio = 30.34;
            Console.WriteLine("el valor del precio es "  + precio);
            Console.ReadKey();
            bool existencia = false;
            Console.WriteLine("el valor de la existencia es "  + existencia);
            Console.ReadKey();
            char comida = 'c';
            Console.WriteLine("el valor de la comida es "  + comida);
            Console.ReadKey();
            string vida = "todo lo que puedes ver";
            Console.WriteLine("el valor de la vida es "  + vida);
            Console.ReadKey();
            dynamic vuelto = -3.8;
            Console.WriteLine("el valor del vuelto es "  + vuelto);
            Console.ReadKey();
        }
    }
}
