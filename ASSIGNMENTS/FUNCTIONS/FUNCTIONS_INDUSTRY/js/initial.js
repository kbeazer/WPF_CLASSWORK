// Kareem K. Beazer
// 9/23/13
// Functions Industry

var actualCost= prompt('Please enter the dollar value of the item');
var salesTax= .07;
var taxAmount= actualCost*salesTax;
var totalCost= actualCost+taxAmount;
function roundDown(){
    var flatDollar= Math.round(totalCost);
    if(actualCost<0){
        totalCost= flatDollar;
        return flatDollar;
}else if(actualCost==''){
        return 'Please enter the dollar amount to continue';
}else{
        return '$'+flatDollar+'';
}
}
console.log(roundDown());