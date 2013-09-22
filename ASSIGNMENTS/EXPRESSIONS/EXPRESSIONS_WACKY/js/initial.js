//Kareem K. Beazer
// 9/20/13
// Expressions Wacky

//***Magic PotatoSack Creator***

var user= prompt('Please enter your name here')
var sack= prompt('Please enter the number of potato bags');
var potato= prompt('Please enter the number of potatoes in each bag');
var totalAmount= parseInt(potato)*parseInt(sack);
var newArray= [totalAmount];
newArray[0]= 'red';
newArray[1]= 'blue';
newArray[2]= 'green';
newArray[3]= 'purple';
newArray[4]= 'yellow';
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
if(user==''){
    result= 'Please enter your name to continue';
}else if(sack==''){
    result= 'Please enter the number of potato bags to continue';
}else if(potato==''){
    result= 'Please enter the number of potatoes in each bag to continue';
}else{
    result= 'Ok '+user+', you have just created a '+totalAmount+' PotatoSack'
}console.log(result);




