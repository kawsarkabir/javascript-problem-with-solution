/* 

*/
function findingBadData(arr){
    if(!Array.isArray(arr)){
        return 'please provide me an array of number'
    }else{
        let badData = 0
        for(let item of arr){
            if(typeof item !== 'number'){
                return 'please provide me an array of number'
            }else{
                if(item < 0){
                    badData++;
                }
            }
        }
        return badData;
    }
}
// const result = [1,2, 3]
const result = [2, -5, -7, -13]
console.log(findingBadData(result));