//Kareem K. Beazer
// 9/20/13
// Conditionals Industry

//***Pay calculator***
var salary= prompt('Enter your desired salary here');
var workHours= 8;
var workWeek= 5;
var workMonth= 30;
var workYear= 12;
var totalHours= workHours*workWeek*workMonth*workYear;
var hourlyRate= salary/totalHours;
var roundedPay= Math.floor(hourlyRate)
if(salary==''){
    console.log('Please enter your desired salary to continue');
}else if(salary<14400){
    console.log('Please enter a minimum value of 20000')
}else{
    console.log('Based on your entered salary, you need a job that pays a minimum of '+roundedPay+'/hour')
}



