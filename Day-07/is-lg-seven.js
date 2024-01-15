/* 

*/
function isLGSeven(x) {
  if (typeof x !== "number") {
    return "please provided me valid number";
  } else {
    const differ = x - 7;
    if(differ < 7){
        return differ;
    }else{
        return x*2
    }
  }
}
console.log(isLGSeven(15));
