/*=============================================================================================
Write a JavaScript program that takes an array and removes all duplicate values of a number and return all the unique values in an array of numbers.                                                                               10
Test: 
Input array: [8,7,8,1,2,5,1]
Output array: [8,7,1,2,5]
==============================================================================================*/
function removeDuplicateNumbers(arr) {
    return [...new Set(arr)];
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 5, 10];
console.log(removeDuplicateNumbers(numbers));

  