/*==========================================================================================
4. Write a JavaScript program to construct the following pattern. using a nested for loop
Example Output: 
* * * * *
* * * * *
* * * * * 
* * * * *
* * * * *
============================================================================================*/
for( var x = 0; x<=4; x++){
    for(var y = 0; y<=4; y++){
        process.stdout.write('*');
    }
    console.log('');
}