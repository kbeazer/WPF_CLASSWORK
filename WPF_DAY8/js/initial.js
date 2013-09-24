/**
 * Created with JetBrains WebStorm.
 * User: KBmac
 * Date: 9/23/13
 * Time: 5:20 PM
 * To change this template use File | Settings | File Templates.
 */
//Week 3 Conditionals Grading Ruberic

var variants= 1;
var calculation= .5;
var conditions= 1;
var validation =1;
var comments= 1;
var github= 1;
var files= 1;
var completeness= 1;
var investment= 1;

var grade= 0;

var varPrompt= prompt('Please enter the number of varients present','i.e "2"');
var varPercent= parseInt(varPrompt)*3.33;

function gradingFunction (variants, calculation, conditions, validation, comments, github, files, completeness, investment)
{
   if(varPercent<3.33){
       return poor;
}else if(varPercent<6.66){
       return fair;
}else if(varPercent<9.99){
       return good;
}else{
      return excellent;
}
}
