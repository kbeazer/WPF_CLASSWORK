//Kareem K. Beazer
// 9/20/13
// Conditionals Personal

// ***Credit Check System***

// I want to create a code that will determine what type of
// car a customer can afford based on their year of birth
var firstPrompt= prompt("Please enter your name");
var secondPrompt= prompt("Please enter the year you were born"," ex. 1974");
var carResult= 2013-secondPrompt;

function randomSelection(){
    if(carResult>40){
    return "Mercedes";
}else if(carResult>37){
    return "BMW";
}else if(carResult>34){
    return "Lexus" ;
}else if(carResult>32){
    return "VW";
}else if(carResult>30){
    return "Nissan";
}else if(carResult>27){
    return "Toyota";
}else if(carResult>24){
    return "Honda";
}else if(carResult>22){
    return "Chevy";
}else if(carResult>20){
    return "Ford";
}else if(carResult>17){
    return "Kia";
}else{
    return 'you do not qualify for a vehicle at this time'
}
}
if(firstPrompt==''){
    console.log('Please enter user Name');
else if(secondPrompt == ""){
        console.log("Please enter the year you born");
    }
else if (firstPrompt =="" && secondPrompt = ""){
        console.log("Please, enter your name and the year you born");
    }
}

//var BMW =0;
//var Mercedes =1;
//var VW =2;
//var Honda =3;
//var Toyota =4;
//var Nissan =5;
//var Ford =6;
//var Chevy =7;
//var Lexus =8;
//var Kia =9;
//var randomGenerate;
//
//function magicSelect(){
//    var creditScore= Math.random();
//

//}
//for(randomGenerate=0;randomGenerate<10;randomGenerate++){
//
//}


//
//var firstInput = prompt("Please, enter a number", "Enter the number Here!");
//var secondInput = prompt("Please, enter a second value","Value goes Here!");
//var result = firstInput + secondInput;
//console.log(result);