/* Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 
Example:
Input: ”Lorem ipsum dolor sit amet consectetur”
Output: 6

Constraints:
using built-in functions is prohibited
 */

function countWords(str) {
    let count = 0;
    let isWord = false;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') { 
        if (!isWord) {  
          count++;  
          isWord = true;  
        }
      } else { 
        isWord = false;  
      }
    }
    
    return count;
  }
  