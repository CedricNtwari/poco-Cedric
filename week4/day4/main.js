

var currentAge;
var retireAge;
var retireYear = 0;
var currentYear = 0;
var futureYear = 0;

 if (isNaN(currentAge) && currentAge != ""){
    currentAge = prompt("Please enter your age as number, e.g. 23 ");

 }
 else if(isNaN(retireAge) && retireAge != ""){
    retireAge = prompt("Please enter your age to retire as number, e.g. 60 ");
 }
 else if(currentAge.slice(0,1) == "_" || currentAge.slice(0,1) == "@"){
    window.alert("Please enter only a number, e.g. 30");
 }

 var date = new Date();
 currentYear = date.getFullYear();

 retireYear = retireAge - currentAge;
 futureYear = currentYear + retireYear;

 document.write("You have "+ retireYear + " years left until you can retire." + "<br>" +"It is " + currentYear + ", so you can retire in "+ futureYear);

