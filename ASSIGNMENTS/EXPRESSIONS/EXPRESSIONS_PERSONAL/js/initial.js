//Kareem K. Beazer
// 9/20/13
// Expressions Personal

//***Change Calculator***
var dollarAmount= prompt('Enter your current amount here');
var itemPrice= prompt('Enter the item price here');
var salesTax= prompt('Enter a single digit tax percent here');
var taxPercentage= salesTax/100;
var taxAmount= taxPercentage*itemPrice;
var fullTotal= itemPrice+taxAmount;
var result = dollarAmount-fullTotal;
if(fullTotal>dollarAmount){
    console.log('You do not have enough funds for this item')
}else if(fullTotal<dollarAmount){
    console.log('You will have $'+result+' after purchasing this item')
}