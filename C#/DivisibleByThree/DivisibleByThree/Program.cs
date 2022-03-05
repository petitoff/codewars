using System;

namespace DivisibleByThree
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(DivisibleByThree("123"));
        }
        static bool DivisibleByThree(string n)
        {
            int a = n[0];
            for (int i = 1; i < n.Length; i++)
            {
                a += n[i];
            }
            if (a % 3 == 0)
                return true;
            else
                return false;
        }
    }
}
