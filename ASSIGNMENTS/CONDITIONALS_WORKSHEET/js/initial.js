/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/15/13
 * Time: 6:17 PM
 * To change this template use File | Settings | File Templates.
 */
//Kareem Beazer 9/12/13 Conditionals Worksheet

//To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must
//weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

var weight= 250;
if(weight>249){
    console.log('The competitor qualifies for the heavyweight division');
}else{
    console.log("The competitor needs to gain some weight!");
}

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user
//has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the
//user puts “F” for the unit, the calculator should convert to Fahrenheit.

var degree= 32;
var unit= "F";

if(unit=="F"){
    console.log("The temperature is "+(degree-32)*5/9+" degrees Celsius");
}
else if(unit=="C"){
    console.log("The temperature is "+(degree*(9/5)+32)+" degrees Fahrenheit");
}

//A student earns a number grade at the conclusion of a course at Full Sail.  Determine the
// appropriate letter grade for that number using conditional statements.

var grade= 73;
var percent= (grade/100)*100;
var letterGrade= '';
if(grade>94){
    letterGrade= 'A+';
}else if(grade>=90){
    letterGrade= 'A';
}else if(grade>=85){
    letterGrade= 'B+';
}else if(grade>=80){
    letterGrade= 'B';
}else if(grade>=76){
    letterGrade= 'C+';
}else if(grade>=73){
    letterGrade= 'C';
}else if(grade>=70){
    letterGrade= 'D';
}else if(grade<=69){
    letterGrade= 'F';
}
console.log("You have a "+percent+"%, which means you have earned a(n) "+letterGrade+" in the class!");


//To meet to maintenance standards a car’s front two tires should have the same pressure and the back
// two tires should have the same pressure.  But the front tires and the rear tires can have different
// pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a
// single conditional that would determine if the tires of a given car are up to spec.

var fLeft= 35;
var fRight= 35;
var rLeft= 40;
var rRight= 40;
var tirePressure=[];
tirePressure[0]=fLeft;
tirePressure[1]=fRight;
tirePressure[2]=rLeft;
tirePressure[3]=rRight;

if(tirePressure[0]==tirePressure[1]&& tirePressure[2]==tirePressure[3]){
   console.log("The tires pass spec!");
}
else{
   console.log("Get your tires checked out");
}








