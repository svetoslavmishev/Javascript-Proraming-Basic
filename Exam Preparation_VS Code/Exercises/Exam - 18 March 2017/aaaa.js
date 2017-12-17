
Skip to content
This repository

Pull requests
Issues
Marketplace
Explore

@svetoslavmishev

0
0

0

delian1986 / SoftUni - C - Sharp - repo
Code
Issues 0
Pull requests 0
Projects 0
Wiki
SoftUni - C - Sharp - repo / Programming Basics/ exersiceForExam / Basics Exam - 18 March 2017/ Basics Exam - 18 March 2017/ 6 - Sum of Two Numbers/ sum two nums.cs
44e21b4 on 24 Mar
@delian1986 delian1986 18 march exam solutions
35 lines (32 sloc) 934 Bytes
using System;

namespace _6___Sum_of_Two_Numbers {
    class Program {
        static void Main(string[] args)
        {
        int start = int.Parse(Console.ReadLine());
        int end = int.Parse(Console.ReadLine());
        int mag = int.Parse(Console.ReadLine());

        var count = 0;
        bool found = false;
        for (int i = start; i <= end; i++)
        {
            for (int y = start; y <= end; y++)
            {
                count++;
                if (i + y == mag) {
                    found = true;
                    Console.WriteLine($"Combination N:{count} ({i} + {y} = {mag})");
                    return;
                }
            }
        }
        if (found == false) {
            Console.WriteLine($"{count} combinations - neither equals {mag}");
        }

    }
}
}

