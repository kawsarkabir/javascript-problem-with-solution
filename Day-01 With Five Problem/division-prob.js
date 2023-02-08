/* ================================================================================================
5. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" (এটির বাংলা নিজে নিজে ভালো করে বুঝে তারপর কোড লিখবে, প্রব্লেমটি খুবই সহজ তবে একটু বুঝে সল্ভ করবে ।)
================================================================================================

for(var i = 0; i <= 100; i++){
    if(i%3 == 0){
        console.log('Fizz');
    }
    else if( i%5 == 0){
        console.log('Fuzz');
    }
    else if(i%3 ==0 && i%5 ==0){
        console.log('FizzFuzz');
    }
}

*/