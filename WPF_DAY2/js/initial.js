/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/13/13
 * Time: 5:30 PM
 * To change this template use File | Settings | File Templates.
 */
console.log("started");

var testGrade = 92;
var letterGrade= "";

if (testGrade>90){
    letterGrade = "A";
} else if(testGrade>80){
    letterGrade = "B";
} else if(testGrade>70){
    letterGrade = "C";
} else if(testGrade>60){
    letterGrade = "D";
} else{
    letterGrade = "F";
}


console.log("A "+testGrade+" is a "+letterGrade);

if (letterGrade=="C"||"A"){
    console.log("King Shotta!!");
}
