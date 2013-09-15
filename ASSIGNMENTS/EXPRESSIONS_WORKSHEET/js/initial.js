/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/13/13
 * Time: 9:32 PM
 * To change this template use File | Settings | File Templates.
 */
//Kareem Beazer 9/13/13 Expressions Worksheet Assignment

//Calculate Sparky's age
var dogAge= 4;
var humanYears= (dogAge/7);
console.log("Sparky is "+humanYears+" human years old which is "+dogAge+" in dog years")

//A bunch of students are having a party and somebody ordered pizza. Create an expression
//that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas
//have the same number of slices and that the person dividing the pizza is really precise,
//so this can be a decimal, like 3.52 slices, etc.)

//Calculate how many pizzas will be needed.
var students=25;
var pizza=10;
var slices=8;
var ordered=(students/(pizza*slices));
console.log("Each person ate "+ordered+" slices of pizza at the party")

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza
//after the slices have been divided up evenly among the guests. Assume guests get whole slices,
//how many whole slices will Sparky feast on?
//Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices
//and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate
//results no matter what numbers I put in for those given variables.)

//Calculate for leftover pizza
var people=39;
var pizza=5;
var slices=8;
var leftover= (slices*pizza)/people;
console.log("Sparky got "+leftover+" slices of pizza.")
//
//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending
//over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that
//will use the items in the array to calculate the average amount spent on groceries.
//Please note: there should only be one given for this problem set, the array holding the five weekly totals.
//You should be able to access the array using the array access notation discussed earlier in the course.

//Calculate for average budget
var week1=100;
var week2=120;
var week3=110;
var week4=90;
var week5=85;
var total= week1+week2+week3+week4+week5;
var average=total/5;
console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week")

//Calculate the discounted price for an item. Create an expression that will calculate the discounted
//price with and without sales tax. (It is acceptable for the result to have more than two digits after
//the decimal. $345.896 for example.)

//Calculate for discounted price
var original=250;
var discount=original*.25;
var newPrice=original-discount
var percent=original/newPrice;
var item="speakers";
var tax=.07*newPrice;
var taxedPrice=tax+newPrice;

console.log("Your "+item+" was originally $"+original+", but after a "+percent+"% discount, it is now $"+newPrice+" without tax, and $"+taxedPrice+" with tax")

