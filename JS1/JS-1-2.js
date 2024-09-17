// Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
let n = 4;
m = n.toString();
let a = m;
let b = m+m;
let c = m+m+m;
let sum = Number(a)+Number(b)+Number(c);
console.log(sum)
