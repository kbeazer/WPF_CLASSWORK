//Kareem K. Beazer
// 9/20/13
// Conditionals Wacky

//***Xbox 1 or Playstation 4***

// This line declares quarter as a variable
var quarter;
// This line declares heads as having a value of 1
var heads= 1;
// This line declares tails as having a value of 4
var tails= 4;
// This line declares consoleA as having the value Playstation 4
var consoleA= 'Playstation 4';
// This line declares consoleB as having the value Xbox One
var consoleB= 'Xbox One';

// This function chooses a random number and assigns that number the value of either heads or tails
function coinToss(){
// This line declares flipIt as having a value of Math.random times 5
    var flipIt= Math.random()*5;
// This line declares callIt as having a value of flipIt rounded down
    var callIt= Math.floor(flipIt);
// This if statement will give the quarter the value of tails if the condition is true
    if(callIt>3){
        quarter= tails;
// This else if statement will give the quarter the value of heads if the above condition is false
}else if(callIt<3){
        quarter= heads; }
// This else statement will return the string text if the if and else statements are false
    else{
        return 'The coin landed directly on its side......rare occasion, fip again (and buy a lottery ticket today)' }
// This line will give ps4 the value as true if quarter is equal to tails

    if(quarter== tails){

        return 'The Mighty Coin has spoken.......'+consoleA+' is the winner of the coin toss!!!';
// This else statement will return the string text if the above if statement is false
    }else{
        return 'The Mighty Coin has spoken.......'+consoleB+' is the winner of the coin toss!!!';
    }
// This line prints the function coinToss to the console
}console.log(coinToss());

