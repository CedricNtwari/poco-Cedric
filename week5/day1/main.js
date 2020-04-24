//user login
// user feed
//@ ts-check
let database = [
    {
        username: "susanne",
        password: "123"
    },
    {
        username: "John",
        password: "pass"
    }
];

let newsFedd = [
    {
        author: "Mark",
        title: "title",
        summary: "the content"
    },
    {
        title: "title",
        author: "Hussam",
        summary: "the content"
    },
    {
        author: "Tom",
        title: "title",
        summary: "the content"
    }];

    // check if user login is correct and show news feed

 //let username= prompt("Please enter your username");
 //let password= prompt("Please enter your password");

//  if(username === database[0].username && password === database[0].password){
//     console.log("Susanne user is logged in");
//     console.log(newsFedd);
//  } else if(username === database[1].username && password === database[1].password){
//     console.log("Mark user is logged in");
//     console.log(newsFedd);
//  }else{
//      alert("Your details login are not correct");
//  }

 //signIn(username,password);
 //signIn("susanne","123");


 function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log("user logged in succesfully");
        for(let i=0;i<newsFedd.length;i++){
            console.log("inside loop feed");
            //document.write(newsFedd[i]+ '<br>');
            let obj = newsFedd[i];
            Object.values(obj).forEach(function(news){
                document.write(news+ "<br>");
            });
        }
    }
    else{
         alert("Your details login are not correct");
     }
 }
 
//  function showFeed(){
//    for(let i=0; i<newsFedd.length;i++){
//        document.write(newsFedd[i].author + '<br>' + newsFedd[i].title +'<br>'+ newsFedd[i].summary +'<br>' );
//    }
//  }
//  showFeed();

 function isUserValid(user,pass){
    for(let i=0; i < database.length; i++){
        if(user === database[i].username && pass === database[i].password){
            //console.log("username and password are correct");
            //console.log(database[i].username +" is correct");
            return true;
        }
    }
    return false;    
 }

//  while
// let counter = 0;
// while(counter <10){
//   console.log(counter);
//   counter++;
// }

// // do while 
//  counter = 0;
// do{
//     console.log(counter);
//     counter++;
// }
// while(counter <10){
//   console.log("after do while loop");
// }


// // for loop
// for(let counter=0;counter<5;counter++){
//     console.log("for loop :"+counter);
// }

// ternary function
function experiencePoints() {
    if (winBattle()) {
    return 10;
    } else {
    return 1;
    }
}
function experiencePoints() {
 let eyperiencePoints = winBattle() ? "return 10" :"return 1";
 }

//    afternoon session: exercises

//  for(var i=0; i<20;i++){
//      if(i%2 == 0){
//         document.write(i+ " is even"+ "<br>");
//      }else{
//         document.write(i+ " is odd"+ "<br>");
//      }
//  }



//  let array = [];
//  for(let i=0;i<20;i++){
//      document.write(array.push(i) + "<br>");
//  }
//  console.log(array);
//  array.forEach(function myFunction(x){
//     if(x%2 === 0){
//         document.write(array[x] + " is even"+ "<br>");
//     }else{
//       document.write(x+ " is odd"+ "<br>");
//   }
//  });




//let i=0;
//  while(i <= 20){
//      if(i%2 === 0){
//         document.write(i+ " is even"+ "<br>");
//      }
//      else{
//         document.write(i+ " is odd"+ "<br>");
//      }
//     i++;
//  }


//  do{
//     if(i%2 === 0){
//         document.write(i+ " is even"+ "<br>");
//      }
//      else{
//         document.write(i+ " is odd"+ "<br>");
//      }
//      i++;
//  }
//  while(i<=20);



// for(i=0;i<=10;i++){
//     let x = i*9;
//     document.write(i +" * 9 = "+ x + "<br>");
// }


 

