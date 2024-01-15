// Factorial using a while loop or a decrementing loop
function factorial(number){
    let result = 1;
    for(let i = number; i>= 1; i--){
        result *= i;
        console.log(i);
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log( fact); 



//  same problem in whiile loop 
function factorial(number){
    let i = 1;
    let result = 1;
    while(i<=number){
        result *= i;
        i++;
    }
    return result;
}
console.log(factorial(7));