/*==============================================================================================
3. Write a JavaScript program to get the greatest common divisor (GCD) of two positive integers.
Two positive integers: 81 and 153
GCD= 9
==============================================================================================*/
var num1 = 81;
var num2 = 153;  
var gcd;
while (num1!=num2)
{
	if (num1>num2){
		num1 = num1 -num2;
	}
	else{
		num2 = num2 - num1;
	}
}
gcd = num1;
console.log(gcd);
