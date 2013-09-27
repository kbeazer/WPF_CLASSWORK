// Kareem K. Beazer
// 9/23/13
// Functions Industry

var actualCost= 25;
var salesTax= .07;
var taxAmount= actualCost*salesTax;
var totalCost= actualCost+taxAmount;

function roundDown(){
    var flatDollar= Math.floor(totalCost);
    if(actualCost<0){
        totalCost= flatDollar;
}else if(actualCost==''){
        return 'Please enter the dollar amount to continue';
}else{

}
}