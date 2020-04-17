
function tellFortune(child, partner, geo, job){
   return "You will be a "+ job + " in " +  geo + ", and married with "+ partner +" with " + child + " kids.";
}
//document.write(tellFortune(3,"John","Bern","teacher"));
//document.write(tellFortune(1,"Sarah","Zurich","web designer"));
//document.write(tellFortune(2,"Tom","Lausanne","web developer"));



function greaterNum(num1,num2){
    return Math.max(num1,num2);
}
//document.write(greaterNum(4,5));
//document.write(greaterNum(0.3,20));
//document.write(greaterNum(-23,5));


var languages = ["hallo welt!","bonjour le monde!","hello world!"];

function helloWorld(lang){
    switch(lang) {
        case "de":
            console.log(languages[0]);
            break;
        case "fr":
            console.log(languages[1]);
            break;
        default:
            console.log(languages[2]);
    }
}
helloWorld("de");




function choices(){
    var colors = ["green","yellow","red","gray"];
    for(var i=0; i< colors.length-1; i++){
        console.log("My favourite color is "+ colors[i]);
    }
}
choices();