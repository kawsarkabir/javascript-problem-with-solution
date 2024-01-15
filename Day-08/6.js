/* Write a JS function reverseArray that takes an array and returns a reverse array.
Example 1:
Input: [ 3, 6, 5, 4, 8]
Output: [ 8, 4, 5, 6, 3 ]
Constraints:
The function cannot change the main array.
Cannot use array methods for reverse.
 */

/* function reverseArry(arr){
    for(var i = )
} */

function reverseArry(arry){
    let result = [];
    for (let i = arry.length -1; i >=0; i--){
        result.push(arry[i])
    }
    return result;
}
console.log(reverseArry([3, 6, 5, 4, 8]));
