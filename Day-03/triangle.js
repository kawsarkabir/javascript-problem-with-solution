/* =============================================================================================
1. Write a javaScript program that takes 3 integers of a triangle and check whether the triangle is valid or not. using if else.
Example_
Input
Input first side: 7
Input second side: 10
Input third side: 5
Output
Valid Triangle
================================================================================================
*/
var side1 = 7;
var side2 = 10;
var side3 = 5;
if(side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1){
    console.log('Valid Triangle');
}
else{
    console.log('Not Valid Triangle');
}