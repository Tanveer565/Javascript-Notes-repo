console.log("Loops");
// A loop is a fundamental programming structure that allows a sequence of 
// instructions or a block of code to be executed repeatedly.

// The primary purpose of loops is to automate repetitive tasks, 
// eliminating the need to write the same code over and over again.

// while loop
// let loggin = false;
// let username;
// let password;
// while(!loggin){
//     loggin = true;
//   username = window.prompt("Enter your username: ");
//   password = window.prompt("Enter your password: ");
//   if(username === "u" && password === "p"){
//     loggin = true;
//     console.log("You are loggedIn!")
//   }
//   else{
//     console.log("Wrong credential try again!");
//   }
// }
// if you wanna excute code must one time try do while loop.

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 1; i <= 10; i+=3){
//     console.log(i);
// }
// for(let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log("Sleep");
// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue;  // in contrast of continue, break will gonna stop the loop entirly
//     }
//     else{
//     console.log(i);
//     }
// }

console.log("Function");
// A function is a block of organized, reusable
//  code that performs a single, related action. Functions are one of the core
//   building blocks in almost all programming languages.

// function HB(username, age){
//     console.log("Happy birthday to you....2");
//     console.log(`Happy birthday dear ${username}`);
//     console.log(`you are ${age} now!`);
// }
// HB("Dani" , 1);

// function isEven(num){
//     return num % 2 === 0? true:false;
// }

console.log("Array");
// An array is a data structure that stores a collection of elements (or values),
// typically of the same data type, at contiguous memory locations.

// let arr = ["Apps","Lions","Donkey","App"];
// some built-in methdos in array
// arr.pop(); //remove last element
// arr.push("Zebra");//add at last
// arr.shift();// remove first element
// arr.unshift("Hippo");//add at first
// console.log(arr.length);
// console.log(arr);
// console.log(arr[2]);
// for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }
// arrays.sort().reverse();
// for(let array of arrays){
//     console.log(array);
// }

console.log("Spread operetor");
// it can concatenate two array or can aadd element in array as well
// let num = [1,2,3,4,5];
// let max = Math.max(...num);
// console.log(max);
// srch about spread operetor on ai
// let fillName = ["Tan","Man","Ran"];
// let fillName2 = ["Gan","Lan"];
// console.log(...fillName,...fillName2,"Nan");
// let str = "hello";
// console.log(...str);

console.log("Rest parameter");
// It can make array and String by elements.
// oppsite of spread

// function foodi(...foods){
//     console.log(foods);
// }
// function foodi(...foods){
//     return foods;
// }
// const food = "Pizza";
// const food1 = "khichdi";
// const food2 = "noodel";
// const food3 = "Ramen";

// let foo = foodi(food,food1,food2,food3);
// console.log(foo);

// function combineStr(...Strings){
//     return Strings.join(" ");
// }
// let fullname = combineStr("Mr.","Shinchan","Harry","Nohara");
// console.log(fullname);

console.log("Callbacks");
/* A callback function in JavaScript is a function that is passed as an
argument to another function, and is intended to be executed later 
 (or "called back") inside that outer function.*/
//  hello(greet);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function greet(){
//     console.log("Good!");
// }

// sum(displaypage, 199, 1);
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }

// function displaypage(result){
//     // This function sets the content of an HTML element
//     document.getElementById("my1").textContent = result; // <-- Sets element with ID "my1" to 200
// }

console.log("forEach()");
// The forEach() method in JavaScript is a built-in Array method
// that provides a clean, elegant way to iterate over the elements
//of an array and execute a provided function (a callback) once for each element.
// Syntex = array.forEach(callback(currentValue, index, array))

// let num = [1, 2, 3, 4, 5];
// num.forEach(Shinchan);

// function Shinchan(element, index, array){
//     // This line directly modifies the original array 'num'
//     array[index] = Math.pow(element, 2); 
// }
// console.log(num); 

// let fruit = ["mango","apple","kiwi"];
// fruit.forEach(capitalize);
// function capitalize(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// console.log(fruit);

console.log(".Map");
// The main job of map() is to call a function on every item in an array,
//  and whatever that function returns is placed into the new array.

// const dates = ["2024-1-10","2025-9-10","2025-1-50"];
// const date = dates.map(displaydates);
// console.log(date);
// function displaydates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

console.log(".filter");
// The .filter() method is a fundamental tool for working with arrays in 
// JavaScript. Its core purpose is to selectively choose 
// elements from an array based on a condition you provide,
//  and then return those chosen elements in a brand-new array.
// const arrays = ["Lions","Donkey","App","vuwbvnuewbvwebu","bcuebuewbbb"];

// const lnew = arrays.filter(shortwords);
// console.log(lnew);
// function shortwords(element){
//     return element.length >= 6;
// }

console.log("Reduce");
// The reduce() method in JavaScript (available on arrays) is a powerful method
//  used to reduce an array of values down to a single value.

// const num =[23,7,4,666,555,3336,6,66,];
// let maximum = num.reduce(max);
// console.log(maximum);
// function max(accumulator,element){
//     return Math.max(accumulator,element);
// }
console.log("Function ecspression");
// In JavaScript, functions are "first-class citizens," meaning they can be
//  treated like any other value (like a string or a number)—you can assign
// them to variables, pass them as arguments to other functions,and return
//    them from functions. The Function Expression syntax leverages this.

// setTimeout(function(){
//     console.log("Helllo");
// },3000);
// // declaration way
// function hell(){
//     console.log("Hell yeh");
// }
// setTimeout(hell,3000);

// let num = [1,2,3,4,5];
// let sqrnum = num.map(function(element){
//     return Math.pow(element,2);
// });
// console.log(sqrnum);

console.log("Arrow Function");
// Arrow functions, introduced in ES6 (ECMAScript 2015),
//  are a concise and modern way to write a function expression
//  in JavaScript. They are often preferred for their cleaner 
// syntax and a key difference in how they handle the this keyword.

// let hello = () => console.log("Hello");
// hello();

// let hello = (name,age) => {console.log(`Hello ${name}`)
//                            console.log(`You are ${age}`)};
// hello("Tanveer",18);

// let num = [1,2,3,4,5];
// let result = num.map((element) => Math.pow(element,2));
// let result = num.filter((element) => element % 2 === 0);
// let result = num.reduce((accumulator,element) => accumulator + element);
// console.log(result);

console.log("Objects");
// Objects are a fundamental concept in JavaScript. 
// Essentially, an object is a data type used to store a 
// collection of keyed values and more complex entities.

// const person1 = {
//     firstNama: "Shinchan",
//     lastName: "Nohara",
//     age: 5,
//     like: "Action Kamin",
//     favfood: () => console.log("Choco-Chips oh damn yehhhhh"),
// };
// const person2 = {
//     firstNama: "Zenitsu",
//     lastName: "Agatsuma",
//     age: 16,
//     love: "Nezuko",
//     hates: () => console.log("Khaega-gu"),
// };
// console.log(person2.love);
// person2.hates();
// console.log(person1.age);
// person1.favwords();
// person2.favwords();

console.log("this");
// This refers to the this keyword in JavaScript.

// The this keyword is a special identifier that refers to the
//  context in which a function is executed. Its value is not fixed;
//  it is determined dynamically when the function is called.

// const person1 = {
//     firstName: "Shinchan",
//     lastName: "Nohara",
//     age: 5,
//     love: "Naneko didi",
//     favwords:function(){
//         console.log(`My name is ${this.firstName+" "+this.lastName}`)
//         // this.name = person1.name 
//         // this. is just A reference of person1
//     },
// };
// person1.favwords();
