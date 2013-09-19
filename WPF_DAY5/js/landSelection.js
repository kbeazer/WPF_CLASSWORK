//Random land type Generator
// 1. Sort out the land types in your world in alphabetical order
// 2. Prompt for (X,Y) positions and return land type at the different positions
// 3.  Enter North, South, East, West, and Quit log
// 4. Handle land borders or edges as you see fit

function landSelection(){
    var initValue= Math.random()*10;
    // console.log(initValue);
    var percentChange = Math.floor(initValue);
    // console.log(percentChange);

    var woods=0;
    var jungle=1;
    var swamp=2;
    var desert=3;
    var mountains=4;
    var dungeons=5;
    var hills=6;
    var tundra=7;
    var wasteland=8;
    var city=9;
    var returnLandType;

    if(percentChange ==woods)
    {returnLandType= 'woods'}
    else if(percentChange == jungle)
    {returnLandType= 'jungle'}
    else if (percentChange==swamp){
        returnLandType= 'swamp'}
    else if (percentChange==desert){
        returnLandType= 'desert'}
    else if (percentChange==mountains){
        returnLandType= 'mountains'}
    else if (percentChange==dungeons){
        returnLandType= 'dungeons'}
    else if (percentChange==hills){
        returnLandType= 'hills'}
    else if (percentChange==tundra){
        returnLandType= 'tundra'}
    else if (percentChange==wasteland){
        returnLandType= 'wasteland'}
    else if (percentChange==city){
        returnLandType= 'city'}
    return returnLandType;
}
function tabGen (len){
    if(len>7){
        return'\t';
    }else if(len>3){
        return'\t\t';
    }else if(len<=3){
        return'\t\t\t';
    }
}
var world =[];
for(j=0;j<10;j++){
    world[j]=[];
    for(i=0;i<10;i++){
        world[j][i]=landSelection();
    }
}
var worldPresentationString='';
for(outer=0;outer<10;outer++){
    worldPresentationString='';
    for(inner=0;inner<10;inner++){
        worldPresentationString+=world[outer][inner];
        worldPresentationString+=tabGen(world[outer][inner].length);
    }
console.log(worldPresentationString);
}