// Kareem K. Beazer
// 9/23/13
// Functions Wacky

var lawnMower= 25;
var tricycle= 50;
var loveSeat= 75;
var airPlane= 100;
function ranVariable(optionA,optionB,optionC,optionD){
    var wheelSpin= Math.random()*100;
    if(wheelSpin<25){
        return optionA;
    }else if(wheelSpin<50){
        return optionB;
    }else if(wheelSpin<75){
        return optionC;
    }else{
        return optionD;
    }

}
