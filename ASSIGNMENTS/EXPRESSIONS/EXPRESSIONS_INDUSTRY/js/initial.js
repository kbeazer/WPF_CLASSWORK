//Kareem K. Beazer
// 9/20/13
// Expressions Industry

//***Client Production Rate

var averageTime= 120;
var days= averageTime/5;
var weeks= Math.floor(days/7);
var result= '';
var client= prompt('Please enter your first name');
var month= prompt('Please enter the numerical value of the current month');
var website= prompt('Please enter the address for your website');
var calculation= 12-month;
var newArray=[];
newArray[1]= 'january';
newArray[2]= 'february';
newArray[3]= 'march';
newArray[4]= 'april';
newArray[5]= 'may';
newArray[6]= 'june';
newArray[7]= 'july';
newArray[8]= 'august';
newArray[9]= 'september';
newArray[10]= 'october';
newArray[11]= 'november';
newArray[12]= 'december';
var productionMonth= newArray[calculation]
if(weeks<2){
    weeks= 'week 1';
}else if(weeks<3){
    weeks= 'week 2';
}else{
    weeks= 'week 3';
}
if(client==''){
    result= 'Please enter your first name to continue';
}else if(month= ''){
    result= 'Please enter the numerical value of the current month to continue';
}else if(website== ''){
    result= 'Please enter the address for your website to continue';
}else{
    result= ''+client+', your website '+website+' will be up and running by '+weeks+' of '+productionMonth+'';
} console.log(result);




