//Kareem K. Beazer
// 9/20/13
// Expressions Wacky

//***Magic PotatoSack Creator***

var user= prompt('Please enter your name here');
var sack= prompt('Please enter the number of potato bags');
var potato= prompt('Please enter the number of potatoes in each bag');
var totalAmount= (parseInt(potato)*parseInt(sack))/5;
var newArray= [totalAmount];
newArray[0]= 'red';
newArray[1]= 'blue';
newArray[2]= 'green';
newArray[3]= 'purple';
newArray[4]= 'yellow';
var magicColor= [];
magicColor[0]= 'black';
magicColor[1]= 'living';
magicColor[2]= 'copper';
magicColor[3]= 'silver';
magicColor[4]= 'gold';
var magicPotatoes= '';
var result= '';
if(totalAmount<20){
    totalAmount= newArray[0];
}else if(totalAmount<40){
    totalAmount= newArray[1];
}else if(totalAmount<60){
    totalAmount= newArray[2];
}else if(totalAmount<80){
    totalAmount= newArray[3];
}else{
    totalAmount= newArray[4];
}
if(totalAmount== newArray[0]){
    magicPotatoes= '5';
}else if(totalAmount== newArray[1]){
    magicPotatoes= '10';
}else if(totalAmount== newArray[2]){
    magicPotatoes= '15';
}else if(totalAmount== newArray[3]){
    magicPotatoes= '20';
}else{
    magicPotatoes= '25';
}
if(totalAmount==newArray[0]){
    magicColor= magicColor[0];
}else if(totalAmount==newArray[1]){
    magicColor= magicColor[1];
}else if(totalAmount==newArray[2]){
    magicColor= magicColor[2];
}else if(totalAmount==newArray[3]){
    magicColor= magicColor[3];
}else{
    magicColor= magicColor[4];
}
if(user==''){
    result= 'Please enter your name to continue';
}else if(sack==''){
    result= 'Please enter the number of potato bags to continue';
}else if(potato==''){
    result= 'Please enter the number of potatoes in each bag to continue';
}else{
    result= ''+user+', you have just created a '+totalAmount+' PotatoSack containing '+magicPotatoes+' '+magicColor+' potatoes';
}console.log(result);




