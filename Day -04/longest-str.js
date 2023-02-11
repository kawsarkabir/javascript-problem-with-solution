/*============================================================================================
Write a JavaScript function that takes a string and returns the longest word within the string.              
Test:
Input: “Full Stack Bootcamp with DEV ZeroOne”
Output: “Bootcamp”
============================================================================================*/
function findLongestWord(str) {
    var words = str.split(' ');
    words.sort((a, b) => b.length - a.length);
    return words[0];
}
  
var testString = 'Full Stack Bootcamp with DEV ZeroOne';
console.log(findLongestWord(testString));
  