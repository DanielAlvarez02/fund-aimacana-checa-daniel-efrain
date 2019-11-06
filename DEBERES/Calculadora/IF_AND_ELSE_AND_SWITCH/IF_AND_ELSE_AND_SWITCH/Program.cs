using System;

namespace IF_AND_ELSE_AND_SWITCH
{
    class Program
    {
        static void Main(string[] args)
        {
            // EEJEMPLOS DE IF AND ELSE
            //Ejemplo 1 : Cajero automático
            Console.WriteLine("ingrese porfavor el valor entregado");
            double Efectivo = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("ingrese porfavor el valor a pagar");
            double Total = Convert.ToDouble(Console.ReadLine());

            if (Efectivo == Total)
            {
                Console.WriteLine("Su compra ha sido realizada");
            }
            else if (Efectivo > Total)
            {
                double diferencia = Efectivo - Total;
                Console.WriteLine(diferencia);
            }
            else if (Efectivo < Total)
            {
                Console.WriteLine("ingrese más efectivo porfavor");
            }


            // Ejemplo 2 : taximetro de uber 
            Console.WriteLine("Ingrese porfavor distancia aproximada de destino");
            double Cantidad = Convert.ToDouble(Console.ReadLine());         
            double DistanciaMinima = 2; // medido en kilometros
            double minimo = 1.50;
            double ValorPorDistancia = Cantidad * 0.75;

            if (Cantidad == DistanciaMinima && Cantidad < DistanciaMinima)
            {
                Console.WriteLine(minimo);
            }
            else if (Cantidad > DistanciaMinima)
            {
                Console.WriteLine(ValorPorDistancia);
            }


            // Ejemplo 3 : Alarma
            // formato de la hora es 24 h
            Console.WriteLine("ingrese la hora de la alarma,por favor");
            double Hora = Convert.ToDouble(Console.ReadLine());
            var fecha = DateTime.Now.ToString();
            double hora = Convert.ToDouble(fecha);

            if (Hora == hora)
            {
                Console.WriteLine("La alarma se activará ahora");
            }
            else { }
           
        }
    }
}
