// Kareem K. Beazer
// 9/23/13
// Functions Wacky

var transportType= [];
transportType[0]= 'Lawn Mower';
transportType[1]= 'Tricycle';
transportType[2]= 'Love Seat';
transportType[3]= 'Air Plane';

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
}  console.log('Today, you will be driving your '+ranVariable(transportType[0],transportType[1],transportType[2],transportType[3])+' to work')
