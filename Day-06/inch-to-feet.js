// convert inch To Feet
function convertToFeet(inchs){
    const convertFeet = inchs / 12;
    return convertFeet;
}
const myFeet = convertToFeet(84);
console.log(myFeet);
