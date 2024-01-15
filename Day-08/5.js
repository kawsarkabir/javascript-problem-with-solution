/* 
Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
In this problem. We will consider 0 as an odd number.

Example 1:
Input: [ 3, 6, 5, 4, 8, 10 ]
Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
Example 2:
Input: [ 0, 2, 4, 7, 9 ]
Output: [ 0, 2, 7 ]

Constraints:
Array length cannot be negative or zero. */

function solution(arry){
    let result = [];
    for(let i = 0; i < arry.length; i++)
    if (i % 2 != 0 || i == 0) result.push(arry[i])
    if(result.length < 3){
        result.push('DEVZEROONE')
    }if(result.length > 3){
        result.unshift('DEVZEROONE')
    }
    return result;
}
console.log(solution([3, 6, 5, 4, 8, 10]));
console.log(solution([0, 2, 4, 7, 9]));
 
  