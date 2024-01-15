/* 

*/
function isJavaScriptFile(filename){
    if(typeof filename !== 'string'){
        return 'please provided a valid file name !'
    }else{
        /* if(filename.toLowerCase().endsWith('.js')=== true){
         return true
        }else{
            return false
        } */
        return filename.toLowerCase().endsWith('.js') // true || false
    }
}
console.log(isJavaScriptFile('hello.Js'));

// alternative solution without buidin function 

function isJavaScriptFile2(filename){
    if(typeof filename !== 'string'){
        return 'please provided a valid file name(string)'
    }else{
        const arr = filename.split('.')
        const lastElement = arr.pop()
        return lastElement.toLowerCase()=== 'js'
    }
}
console.log(isJavaScriptFile2('hello.js'));