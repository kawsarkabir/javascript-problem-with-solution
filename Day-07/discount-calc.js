/* 
write a funtion that takes input the total price of the products you bought are return the net price calculated according to the discoutn table below
*/

function discountCalc(totalPrice){
    if(totalPrice >= 5000){
        const discountPrice = totalPrice *(20/100)
        const netPrice = totalPrice - discountPrice
        console.log(netPrice);
    }else if(totalPrice >= 3000){
        const discountPrice = totalPrice *(15/100)
        const netPrice = totalPrice - discountPrice
        console.log(netPrice);
    }else if(totalPrice >= 1000){
        const discountPrice = totalPrice *(10/100)
        const netPrice = totalPrice - discountPrice
        console.log(netPrice);
    }else{
        console.log('you cannot get discount');
    }
}
discountCalc(1000)