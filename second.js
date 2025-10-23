//count programme
// const decreaseBtn = document.getElementById("d");
// const resetBtn = document.getElementById("r");
// const increaseBtn = document.getElementById("i");
// const countlabel = document.getElementById("c");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countlabel.textContent = count;
// }

console.log("Math class");
//Math functions

// let pi = Math.PI;
// z = Math.round(x)    // 5 → rounds to nearest integer
// z = Math.ceil(x)     // 5 → rounds up
// z = Math.floor(x)    // 4 → rounds down
// z = Math.trunc(x)    // 4 → removes decimal part

// z = Math.min(x,y)   // 2 → smallest number
// z = Math.max(5, 10, 2)   // 10 → largest number
// z = Math.abs(y)         // 7 → absolute value

// z = Math.pow(x, y)       // 8 → 2^3
// z = Math.sqrt(16)        // 4 → square root
// z = Math.cbrt(27)        // 3 → cube root
//z = Math.log(11)         // Natural log (ln)

// z = Math.sin(Math.PI/2)  // 1
// z = Math.cos(0)          // 1
// z = Math.tan(Math.PI/4)  // 1

// z = Math.sign(-5)  

// console.log(z);

//  console.log("Random number");
// let min = 50;
// let max = 100;
// let randomNum = Math.floor(Math.random()*(max - min + 1) + min);
// console.log(randomNum);


 console.log("If statements");
// let age = 0
// if(age >= 18){
//     console.log("You are ready!");

//     if(age == 18){
//         console.log("Happy wishes");
//     }
//     else{
//         console.log("You already got that.");
//     }

// }

// else if(age == 0){
//     console.log("Born firts");
// }

// else{ 
//     console.log("You are not ready")
// }
console.log("If statement2");
// const input = document.getElementById("mynum");
// const button = document.getElementById("mybtn");
// const result = document.getElementById("Result");

// button.onclick = function() {
//     let age = Number(input.value);

//     if (age <= 0) {
//         result.textContent = `You are ${age}, wtf`;
//     } else if (age > 100) {
//         result.textContent = `You are ${age}, too old`;
//     } else if (age >= 18) {
//         result.textContent = `You are ${age}, eligible`;
//     } else {
//         result.textContent = `You are ${age}, not eligible`;
//     }
// }
console.log("Check property");

// const mycheckbox = document.getElementById("mycheckbox");
// const visacard = document.getElementById("visacard");
// const mastercard = document.getElementById("mastercard");
// const mysumbit = document.getElementById("mysumbit");
// let subresult = document.getElementById("subresult");
// let payresult = document.getElementById("payresult");

// mysumbit.onclick = function(){
//     if(mycheckbox.checked){
//         subresult.textContent = `you are subscribed!`;
//     }
//     else{
//         subresult.textContent = `you are not subscribed!`;
//     }
//     if(visacard.checked){
//         payresult.textContent = `You payed with Visa.`;
//     }
//     else if(mastercard.checked){
//         payresult.textContent = `You payed with mastercard.`;
//     }
//     else{
//         payresult.textContent = `Select card to pay!`;
//     }
// }
console.log("Ternary operator");
// let age = window.prompt("Enter your age: ");
// console.log(age);
// let isadult = age >= 18 ? `you are adult`:`you are kid`;
// console.log(isadult);
console.log("Switch statements");
// let score = 50;
// let grade;

// switch(true){
//     case score >= 90:
//         grade = "A";
//         break;
//     case score >= 70:
//         grade = "B";
//         break;
//     case score >= 50:
//         grade = "C";
//         break;
//     case score >= 33:
//         grade = "F";
//         break;
//     default:
//         grade = "Fail";
//         break;

// }
// console.log(grade);

console.log("String method");
let full = "Tanveer khan";

// console.log(full.length);
// x = full.charAt(9);
// x = full.indexOf("e");
// x = full.lastIndexOf("e");
// x = full.includes("eer");
// x = full.startsWith("T");
// x = full.endsWith("n");
// x = full.toLowerCase();
// x = full.toUpperCase();
// x = full.trim();
// x = full.repeat(9);
// x = full.replaceAll("v","z");
// x = full.padStart(20);
// x = full.padEnd(15, "@");
console.log(x);

// String slicing

// let email = window.prompt("Enter your email: ")
// username = email.slice(0 , email.indexOf("@"));
// domain = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(domain);     

// Method changing = Calling one method after another
// let username = window.prompt("Enter your username: ");
//  username = username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
//  console.log(username);

//  if you just reached here srch logical operator and strict equality and inequality on ai.


