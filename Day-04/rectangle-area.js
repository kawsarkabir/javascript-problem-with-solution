/*=========================================================================================== 
Write a JavaScript program to calculate the area of a rectangle. Create a method to calculate the area. The length and width of the rectangle will be provided by the user. 
===========================================================================================*/
function rectangleArea(length, width) {
    return length * width;
}

var length = parseFloat(prompt("Enter the length of the rectangle: "));
var width = parseFloat(prompt("Enter the width of the rectangle: "));
var area = rectangleArea(length, width);
  
console.log("The area of the rectangle is: " + area);
  