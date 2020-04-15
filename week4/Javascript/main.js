// var numChildren = 3;
// var partName = "Jessica";
// var loc = "Bern";
// var job = "a developer"; 

// document.write("You will be " + job + " in " + loc + " and married to "
//                      + partName + " with " + numChildren+ " kids");

//  numChildren = prompt("Enter Num of children:");
//  partName = prompt("Enter name of your partner:");
//  location = prompt("Enter name of a city: ");
//  job = prompt("Enter title of your job: ");

//  document.write("You will be " + job + " in " + location + " and married to "
//  + partName + " with " + numChildren+ " kids");

//  var  num1 = 5;
//  var num2= 10;
//  if(num1 <= num2){
//   document.write("The greater number of 5 and 10 is 10.");
//  }else{
//     document.write("The smaller number of 5 and 10 is 5.");
//  }

// var  num1 = 5;
// var num2= 10;
// num1 <= num2 ? document.write( "The greater number of 5 and 10 is 10.") : document.write( "The smaller number of 5 and 10 is 5.") ;

// var billAmount = Number(prompt("What is the bill amount"));
// var tip = 0;
// var tipRate = Number(prompt("what is the tip rate"));;
// var total= 0;

 
//  tip= Math.round(billAmount * (tipRate /100));
//  total = billAmount + tip;

// document.write("Tip: CHF: " + tip + " and Total : CHF " + total);

var birthYear = Number(prompt("Enter your birth year"));
var monthYear = Number(prompt("Enter your birth year"));

var futureYear = Number(prompt("Enter the future year"));
var total = Number(futureYear - birthYear);

document.write("In "+ futureYear+ " year, you will be "+ total + " years old.");
