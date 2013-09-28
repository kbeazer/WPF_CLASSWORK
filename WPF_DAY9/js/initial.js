// Rolling Average Function
var percentIncrease= .03;
var currentSales= 150;
var averageNumbers= [];
averageNumbers[0]= 120;
averageNumbers[1]= 130;
averageNumbers[2]= 140;
averageNumbers[3]= 150;

//function rollingAverage(){
//    var totalAverage= (averageNumbers[0]+averageNumbers[1]+averageNumbers[2])/3;
//    return totalAverage;
//}
function projectedSales(salesArray){
    var returnValue= 0;
    for(i=1;i<salesArray.length;i++){
        returnValue+=salesArray[i];
}return returnValue/(salesArray.length-1);
}
function salesForecast(incPercent, currentAvgValue){
    return (1+incPercent)*currentAvgValue;
}
function performanceAverage(currentSales, priorAverage){
    return (currentSales-priorAverage)/priorAverage;
}
function max(sortingArray){
    var largest= 0;
    for(i=0;i<sortingArray.length;i++){
        if(largest<sortingArray[i]){
            largest= sortingArray[i];
        }
    } return largest
}
function min(sortingArray){
    var smallest= max(sortingArray);
    for(i=0;i<sortingArray.length;i++){
        if(smallest>sortingArray[i]){
            smallest= sortingArray[i];
        }
    } return smallest
}
function compareMe(min, max, current){
      if(current<min){
        return 'The number of sales is too low!!!'
}else if(current>max){
        return 'Celebration time!!!'
}else{
        return 'You have met the bare essentials required to stay in business'
    }
}
console.log('The Forecast is '+salesForecast(percentIncrease,projectedSales(averageNumbers)))
console.log(currentSales, projectedSales(averageNumbers))
console.log(max(averageNumbers))
console.log(min(averageNumbers))
console.log(compareMe(min(averageNumbers),max(averageNumbers),averageNumbers[0]))
