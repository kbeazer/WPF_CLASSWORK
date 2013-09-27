// Kareem K. Beazer
// 9/23/13
// Functions Personal
var monthBorn= prompt('Please enter the month you were born','Enter a number value HERE');
var yearBorn= prompt('Please enter the year you were born');
var currentYear= 2013;


function idChecker(){
    var userAge= currentYear-yearBorn;
    if(monthBorn==''){
        return 'Please enter the month you were born to continue'
}else if(monthBorn>12){
        return 'Please enter a number value of 12 or lower for the month you were born'
}else if(yearBorn==''){
        return 'Please enter the year you were born to continue'
}else if(userAge<18){
        return 'You do not meet the age requirements necessary to continue'
}else{
        return 'Your current age this year is '+userAge+', access granted!'
    }
} console.log(idChecker())
