using System;

namespace Calculadora_Examen
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.ReadKey();
			calculadora();
		}
		public static double Suma(double numero1, double numero2, double numero3, double numero4)
		{
			return numero1 + numero2 + numero3 + numero4;
		}

		public static double Resta(double numero1, double numero2, double numero3, double numero4)
		{
			return numero1 - numero2 - numero3 - numero4;
		}

		public static double Multiplicar(double numero1, double numero2, double numero3, double numero4)
		{
			return numero1 * numero2 * numero3 * numero4;
		}

		public static double Dividir(double numero1, double numero2)
		{
			return numero1 / numero2;
		}
		public static double Exponencial(double numero1)
		{
			return Math.Pow(Math.E, numero1);
		}
		public static double Hipotenusa(double cateto, double cateto2)
		{
			return Math.Sqrt(Math.Pow(cateto, 2) + Math.Pow(cateto2, 2));
		}

		public static double Cateto(double hipotenusa, double cateto)
		{
			return Math.Sqrt(Math.Pow(hipotenusa, 2) - Math.Pow(cateto, 2));
		}

		public static double Logaritmo(double numero1)
		{
			return Math.Log(numero1, Math.E);
		}

		public static double AreaDeUnCírculo(double radio)
		{
			return Math.PI * Math.Pow(radio, 2);
		}

		public static double Factorial(int factor)
		{
			for (int i = factor - 1; i > 1; i--)
			{
				factor *= i;
			}
			return factor;
		}

		public static void calculadora()
		{
			Console.WriteLine("Selecione la operación: SUMA[A], RESTA[B], MULTIPLICACIÓN[C], DIVISIÓN[D], EXPONENCIAL[E], HIPOTENUSA[F], CATETO[G], LOGARITMO NATURAL[H], AREA DE UN CIRCULO[I], FACTORIAL[J], SE TERMINO[K]");
			char opcion = Convert.ToChar(Console.ReadLine());

			if (opcion == 'A')
				{
					Console.WriteLine("Ingrese valor 1");
					double numero1 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 2");
					double numero2 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 3");
					double numero3 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 4");
					double numero4 = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Suma(numero1, numero2, numero3, numero4));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'B')
				{
					Console.WriteLine("Ingrese valor 1");
					double numero1 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 2");
					double numero2 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 3");
					double numero3 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 4");
					double numero4 = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Resta(numero1, numero2, numero3, numero4));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();

				}
				else if (opcion == 'C')
				{
					Console.WriteLine("Ingrese valor 1");
					double numero1 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 2");
					double numero2 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 3");
					double numero3 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 4");
					double numero4 = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Multiplicar(numero1, numero2, numero3, numero4));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'D')
				{
					Console.WriteLine("Ingrese valor 1");
					double numero1 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese valor 2");
					double numero2 = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Dividir(numero1, numero2));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'E')
				{
					Console.WriteLine("Ingrese exponente de la funcion exponencial:");
					double exponente = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Exponencial(exponente));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'F')
				{
					Console.WriteLine("Ingrese el cateto 1:");
					double cateto1 = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese el cateto 2:");
					double cateto2 = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Hipotenusa(cateto1, cateto2));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();

				}
				else if (opcion == 'G')
				{
					Console.WriteLine("Ingrese la hipotenusa:");
					double hipotenusa = Convert.ToDouble(Console.ReadLine());
					Console.WriteLine("ingrese el cateto:");
					double cateto = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Cateto(hipotenusa, cateto));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'I')
				{
					Console.WriteLine("Ingrese exponente de la funcion logarítmica:");
					double log = Convert.ToDouble(Console.ReadLine());

					double resultado = Convert.ToDouble(Logaritmo(log));
					Console.WriteLine("Su resultado es: " + resultado);
				calculadora();
				}
				else if (opcion == 'J')
				{
					Console.WriteLine("Ingrese el valor:");
					int valor = Convert.ToInt32(Console.ReadLine());

					int resultado = Convert.ToInt32(Factorial(valor));
					Console.WriteLine("Su resultado es: "+resultado);
				calculadora();
				}
				else if (opcion == 'K')
				{
					Console.WriteLine("Adios Hermano Mchas Gracias");
				}
				else
				{
					calculadora();
				}

			
			}
		}

	}


