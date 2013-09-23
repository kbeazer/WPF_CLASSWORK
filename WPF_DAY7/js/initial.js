var a= 5;
var b= 10;
var c= 15;
var multiply= a*b;
var expressResult= (multiply*1)+c;
var codeResults= [];

if(c<0){c= c*-1;}

for(i=0;i<10;i++){
    var aInc= 2*i;
    var bInc= 3*i;
    var cInc= 1*i;
    a= a+aInc;
    b= b+bInc;
    c= c+cInc;
    codeResults[i]= a*b+c
}
console.log(codeResults)