//Kareem K. Beazer
// 9/20/13
// Conditionals Wacky

//***Xbox 1 or Playstation 4***

var quarter;
var heads= 1;
var tails= 4;
var xbox1= 0;
var ps4= 5;
var consoleA= 'Playstation 4';



function coinToss(){
    var flipIt= Math.random()*5;
    var callIt= Math.floor(flipIt)
    if(callIt>3){
        quarter= tails;
}else if(callIt<3){
        quarter= heads;
    }else{
        return 'The coin landed directly on it'+'s'+ 'side......rare occasion, fip again (and buy a lottery ticket today)'
    }if(quarter== tails){
        ps4= true;
        console.log('The Mighty Coin has spoken.......'+ps4+' is the winner of the coin toss!!!')
    }else{
        return 'The Mighty Coin has spoken.......'+xbox1+' is the winner of the coin toss!!!'
    }
}
