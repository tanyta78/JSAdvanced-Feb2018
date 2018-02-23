//Write a program that receives two numbers as arguments and finds the greatest common divisor between them.
function euclidsAlgorithm(a, b){
    return b == 0 ? a : euclidsAlgorithm(b, a%b);
}