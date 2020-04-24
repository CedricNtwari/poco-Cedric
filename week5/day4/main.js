/*split the big problem
1. add item, via enter key,
  validate input,
 focus input field
2. add password protection
3. delete item
4. mark item as done
5.sort list alphabetically
*/ 
/*declaring variables*/ 
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let  button = document.querySelector("button");
let array = [];
let errormsg= "";
const password = "pass123";

/*Prompt for password */
let userPass = prompt("What is your Password: ");
isUserValid(userPass);
// get input value
button.addEventListener("click", addListItem);
input.addEventListener("keypress", checkIfReturnKey);


function isUserValid(){
    if(userPass !== password){
        errormsg = "password is not correct, Please try again";
        window.alert(errormsg);
        return false;
    }else 
      return true;
//    if(userPass.value.match(password)){
//        window.alert("ok");
//        return true;
//    }else
//    window.alert("not ok");
//    return false;
    }


function checkIfReturnKey(event){
   console.log(event);
   if(event.keyCode === 13){
       addListItem();
   }
}

function IsInputValidate(){
    input.value = input.value.trim();
    if(input.value !== ""){
        //console.log("in IF");
        /* loop through array item is equal to value */
        for(let i=0;i< array.length;i++){
            if(array[i] === input.value){
                /*is a duplicate*/
                errormsg = "This to do is already in your list";
                return false;
            }
        }
        return true;
    } 
    errormsg = "please enter sth to do"
    return false;
}
// function: create  a new list elt and add it to UL 

function addListItem(){
    if(IsInputValidate()){
         array.push(input.value);
        /* add input to array for validation checks*/
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = "";
        input.focus();
    }else{
        alert(errormsg);
    }
    
}

