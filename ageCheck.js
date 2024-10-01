//create a peogram that prompts the user to enter their age.
//use if else structure to determine if the user is a child,teenager, or an adult.

let age = prompt("please enter your age:");//store your age.
age = parseInt(age);
if (age<13) {
 console.log("you're a child");
}
else if(age<=19){
  console.log("you're a teenager");
}
else {
  console.log("you're an adult");
}
console.log(age);