//Kareem K. Beazer
// 9/20/13
// Expressions Personal

//***Change Calculator***
var dollarAmount= prompt('Enter your spending amount here');
var itemPrice= prompt('Enter the item price here');
var salesTax= prompt('Enter a single digit sales tax percentage here');
var taxPercentage= salesTax/100;
var taxAmount= Math.floor(taxPercentage*itemPrice);
var result= '';
var newArray= [];
newArray[0]= itemPrice;
newArray[1]= taxAmount;
var fullTotal= newArray[0]*1+newArray[1];
var newBalance= dollarAmount-fullTotal;
if(dollarAmount==''){
    result= 'Please enter your spending amount to continue';
}else if(itemPrice==''){
    result= 'Please enter the item price to continue';
}else if(salesTax==''){
    result= 'Please enter the sales tax percentage to continue';
}else if(fullTotal>dollarAmount){
    result= 'You do not have enough funds for this item';
}else{
    result= 'You will have $'+newBalance+' left after purchasing this item';
} console.log(result);
