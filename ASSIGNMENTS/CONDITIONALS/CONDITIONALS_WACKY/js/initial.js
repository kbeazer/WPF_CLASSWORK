//Kareem K. Beazer
// 9/20/13
// Conditionals Wacky

//***Xbox 1 or Playstation 4***

// This line declares quarter as a variable
var quarter;
// This line declares heads as having a value of 1
var heads= 1;
var tails= 4;
var xbox1= 0;
var ps4= 5;
var consoleA= 'Playstation 4';
var consoleB= 'Xbox One';


function coinToss(){
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

