/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/16/13
 * Time: 7:15 PM
 * To change this template use File | Settings | File Templates.
 */

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
var landType;

function landSelection(){
    var initialValue= Math.random()*10;
    var percentChange= Math.floor(initialValue);
    if(percentChange== woods){
        landType= "woods"
    }else if(percentChange== jungle){
        landType= "jungle"
    }else if(percentChange== swamp){
        landType= "swamp"
    }else if(percentChange== desert){
        landType= "desert"
    }else if(percentChange== mountains){
        landType= "mountains"
    }else if(percentChange== dungeons){
        landType= "dungeons"
    }else if(percentChange== hills){
        landType= "hills"
    }else if(percentChange== tundra){
        landType= "tundra"
    }else if(percentChange== wasteland){
        landType= "wasteland"
    }else{
        landType = 'city'
    }return landType;

}
//console.log(landSelection());

function tabGen (len){
    if(len>7){
        return '\t';
    } else if (len>3){
        return '\t\t';
    } else if (len<=3){
        return '\t\t\t';
    }
}

//console.log(landSelection());

var world = [];
for(j=0;j<10;j++){
//remove the rowOfLand variable and replace it with an Array
//    var rowOfLand='';
    world[j]=[];
    for(i=0;i<10;i++){
        world[j][i]=landSelection();
//        console.log(world[j][i]);

    }
}
var worldPresentationString ='';
for(outer=0;outer<10;outer++){
    worldPresentationString ='';
    for(inner=0;inner<10;inner++){
        worldPresentationString+=world[outer][inner];
        worldPresentationString+=tabGen(world[outer][inner].length);
    }
    console.log(worldPresentationString);

}
//character initial position
var xPos=0;
var yPos=0;
var endCondition = true;
var movementArray= [];
var counter=0;
//Movement through our arrays
do{
   var movement= prompt('Move your character which direction (N,S,E,W,Q)');
   if(movement=='N' || movement =='n'){yPos--;}
   if(movement=='S' || movement =='s'){yPos++;}
   if(movement=='E' || movement =='e'){xPos++;}
   if(movement=='W' || movement =='w'){xPos--;}
   if(movement=='q' || movement=='Q'){endCondition=false;}
   //console.log('x:' +xPos+' | '+' y:'+yPos);
   if(xPos==-1){xPos = 9}
   if(yPos==-1){yPos = 9}
   if(xPos==10){xPos = 0}
   if(yPos==10){yPos = 0}
   console.log(world[yPos][xPos]);
   var movementPosition= [];
    movementPosition[0]= world[xPos][yPos];
    movementPosition[1]='x:'+xPos+'|'+''+yPos;

  }
while(endCondition);        //Something is true
//
//d
//console.clear();
