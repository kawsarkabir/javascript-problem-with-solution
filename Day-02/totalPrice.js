/*===========================================================================================================
3. You have gone market to buy 2kg potato (20 tk per kg), 1kg tomato (40 tk per kg), 3kg sugar (120 tk per kg) and 5 litre mustard oil (120 tk per kg). your mother ha given 2000k to buy those. 
write a js programe to calculate the total cost and how much money return 
===========================================================================================================*/
var momGiveMoney = 2000;
var potatoKg = 20;
var tomatoKg = 40;
var sugarKg = 120;
var oilKg = 200;
var totalPrice = potatoKg * 2 + sugarKg * 3 + tomatoKg + oilKg * 5;
console.log('Total Cost ' + totalPrice);
var tkReturn = momGiveMoney - totalPrice;
console.log('Tk Return ' + tkReturn);
