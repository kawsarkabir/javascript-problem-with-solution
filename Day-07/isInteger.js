/* 
tumake amon akta 
*/
function isInteger(x){
    if(typeof x !== 'number'){
        return 'please provided a valid number'
    }else{
        if(x % 1 === 0){
            return true
        }else{
            return false
        }
    }
}
console.log(isInteger(2));
console.log(isInteger(2.89));