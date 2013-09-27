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
}else if(yearBorn==''){
        return 'Please enter the year you were born to continue'
}else{
        return userAge;
}if(userAge<18){
        return 'You do not meet the age requirements necessary to continue'
}else{
        return 'Your current age this year is '+userAge+', access granted!'
    }
} console.log(idChecker())
