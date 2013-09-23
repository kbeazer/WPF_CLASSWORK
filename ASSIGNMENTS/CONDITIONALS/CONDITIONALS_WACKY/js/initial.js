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
// This line declares xbox1 as having a value of 0
var xbox1= 0;
// This line declares ps4 as having a value of 5
var ps4= 5;
// This line declares consoleA as having the value Playstation 4
var consoleA= 'Playstation 4';
// This line declares consoleB as having the value Xbox One
var consoleB= 'Xbox One';

// This function chooses a random number and assigns that number the value of either heads or tails
function coinToss(){
// This line declares flipIt as having a value of Math.random times 5
    var flipIt= Math.random()*5;
    var callIt= Math.floor(flipIt);
    if(callIt>3){
        quarter= tails;
}else if(callIt<3){
        quarter= heads;
    }else{
        return 'The coin landed directly on its side......rare occasion, fip again (and buy a lottery ticket today)'
    }if(quarter== tails){
        ps4= true;
        console.log('The Mighty Coin has spoken.......'+consoleA+' is the winner of the coin toss!!!')
    }else{
        return 'The Mighty Coin has spoken.......'+consoleB+' is the winner of the coin toss!!!'
    }
}console.log(coinToss());

