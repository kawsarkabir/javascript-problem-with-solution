// sum of number 
function sumOfNumber(number){
  let sum = 0;
  for (let i = 0; i <= 10; i++){
    sum = sum + i;
    console.log(sum);
  }
  return sum;
}
sumOfNumber(); 




// multipication OF numbers 1-10
function  factorial(number){
    let result =1;
    for ( let i = 1; i<= 10; i++){
        result *= i;
    }
    return result;
}
console.log( factorial());