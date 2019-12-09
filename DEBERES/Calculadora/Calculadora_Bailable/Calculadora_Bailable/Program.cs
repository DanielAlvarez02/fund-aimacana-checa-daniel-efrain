using System;

namespace Calculadora_Bailable
{
    class Program
    {
        static void Main(string[] args)
        {
            //Calculadora con operaciones básicas y función exponencial

            Console.WriteLine("ingrese el primer numero, por favor");
            double numero01 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("ingrese el segundo numero porfavor");
            double numero02 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("ingrese [A] si desea Sumar; [B] si desea Restar; [C] si desea Multiplicar; [D] si desea Dividir; [E] si desea una Función Exponencial");
            char opcion = Convert.ToChar(Console.ReadLine());
            double euler = Math.E;


            if (opcion == 'A')
            {
                Console.WriteLine(Convert.ToDouble(numero01 + numero02));
            } else if (opcion == 'B')
            {
                Console.WriteLine(Convert.ToDouble(numero01 - numero02));
            } else if (opcion == 'C')
            {
                Console.WriteLine(Convert.ToDouble(numero01 * numero02));
            } else if (opcion == 'D')
            {
                Console.WriteLine(Convert.ToDouble(numero01 / numero02));
            } else if (opcion == 'E')
            {
                Console.WriteLine(Convert.ToDouble(Math.Pow(euler, numero01)));
                Console.WriteLine(Convert.ToDouble(Math.Pow(euler, numero02)));
            }

        

        }
    }
}
