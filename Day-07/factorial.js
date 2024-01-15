/* 
write a function that will take a integer as a input and will return the factorial number for the inpur (using for and while loop)

***************** Factorial ar Formula *************
*/
function fact(n){
    let result = 1;
    let i = n
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
console.log(fact(7));