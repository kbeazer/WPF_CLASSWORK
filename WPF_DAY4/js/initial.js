/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/16/13
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

//Using Arrays
var xyzArray = [];

xyzArray[0]='happy';
xyzArray[1]='Full Sail';
xyzArray[2]='7';
xyzArray[3]='bat';

//This is the formula for loops
for(i=0;i<xyzArray.length;i=i+1){
    console.log(xyzArray[i]);
}

//Let's talk about functions.
 function myFirstFunction (number1, number2)
 {
     var productOfNum1And2;
     productOfNum1And2 = parseInt(number1) *parseInt(number2);
     return productOfNum1And2;
 }
console.log(myFirstFunction(5,7));

//Same functions problem shortened down
function mySecondFunction (number1, number2)
{
    return parseInt(number1) + parseInt(number2);
}
console.log(mySecondFunction(5,7));

// Now let's work on a Random Land Type Generator
var randomValue = Math.random();
console.log(randomValue);

function landSelection(percentChange){
    if(percentChange<.5){return 'woods'}
    else{return 'jungle'}
}
console.log(landSelection(randomValue));

// Another loop formula
for(i=0;i<10;i++){
    console.log(landSelection(randomValue));
}

// Function practice assignment

function cubedValue(number) // function is the name of the formula and must be used.
{
    var value;  // on this line all values are declared
    value= parseInt(number)*parseInt(number)*parseInt(number); // this line defines the declared values
    return value;   // return is used to command an action.
}
console.log(cubedValue(3)); // console.log prints out the selected portion of the code

