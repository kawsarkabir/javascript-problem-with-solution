/* 

*/
function mindGame(x){
    /* if(typeof x !== 'number'){
        return 'please provide a number'
    }else if(x <= 0){
        return 'please provided a positive number'
    }else{
        const result = (((x*3)+10)/2)-5
        return result
    } */
    // validation alternative 
    if(typeof x !== 'number' || x <= 0){
        return 'please provided me a positive number'
    }else{
        const result = (((x*3)+10)/2)-5
        return result
    }
}
console.log(mindGame(5));