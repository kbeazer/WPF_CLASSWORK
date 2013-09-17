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

function landSelection(){
    var percentChange = Math.random();
    if(percentChange=woods){
        return "woods"
    }else if(percentChange=jungle){
        return "jungle"
    }else if(percentChange=swamp){
        return "swamp"
    }else if(percentChange=desert){
        return "desert"
    }else if(percentChange=mountains){
        return "mountains"
    }else if(percentChange=dungeons){
        return "dungeons"
    }else if(percentChange=hills){
        return "hills"
    }else if(percentChange=tundra){
        return "tundra"
    }else if(percentChange=wasteland){
        return "wasteland"
    }else{
        return "city"}
}
console.log();
for(i=0;i<10;i+1){
    console.log(landSelection());
}