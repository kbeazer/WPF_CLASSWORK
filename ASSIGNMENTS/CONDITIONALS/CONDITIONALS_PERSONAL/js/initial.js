//Kareem K. Beazer
// 9/20/13
// Conditionals Personal

// ***Credit Check System***

// I want to create a code that will determine what type of
// car a customer can afford based on their year of birth

//This will prompt the user to enter their name
var firstPrompt= prompt('Please enter your name');
// This will prompt the user to enter the year they were born
var secondPrompt= prompt('Please enter the year you were born','ex. 1974');
//This calculation will give the age of the user
var carResult= 2013-parseInt(secondPrompt);
//This function generates a vehicle based on the age of the user
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
    return 'you do not qualify for a vehicle at this time';
}
}
// This command prompts the user to enter their name in order to continue
if(firstPrompt==''){
    console.log('Please enter user name to continue');
// This command prompts the user to enter the year that they were born in order to continue
}else if(secondPrompt== ''){
        console.log('Please enter the year you born');
//
}else if(carResult<17){
        console.log('We are very sorry '+firstPrompt+', but you do not qualify for a vehicle at this time');
}else{
        console.log(''+firstPrompt+', you have qualified for a brand new '+randomSelection()+'!!!');
}
