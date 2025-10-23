
console.log("CONSTRUCTORS");
// to make an object for things that has same keys with differ info.

// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.price = function(){console.log(`This model ${this.make} has a price $0000`)}
// };
// const car1 = new Car("Ford","Mustang","1990","Blue");
// const car2 = new Car("Cheverlot","Mustang","1990","Blue");
// const car3 = new Car("Frari","Mustang","1990","Blue");
// console.log(car3.make);
// car3.price();

console.log("Classes"); // consider better than constructors
// Classes are a modern feature in JavaScript (introduced in ES6/ES2015) that
//  provide a cleaner and more structured way to create "templates" for objects,
//  dealing with inheritance and object creation.

// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayproduct(){
//         console.log(`The ${this.name} price is $${this.price.toFixed(2)}`)
//     }
//     calculate(salestax){
//         return this.price + (this.price * salestax)
//     }
    
// };
// let salestax = 0.05;

// const product1 = new product("Shirt",200);
// console.log(product1.price);
// product1.displayproduct();

// const total = product1.calculate(salestax);
// console.log(`Total after tax is $${total.toFixed(2)}`);

console.log("Static KeyWord");
// The static keyword in JavaScript is used within a class to define 
// properties or methods that belong to the class itself, rather than 
// to any specific instance (object) created from that class.

// In short: Static members are accessed directly on the Class name, 
// not on an object variable.

// class MathUtil{
//     static pi = 3.14159;
//     static areaOfCircle(radius){
//         return this.pi * (radius*radius)
//     }
// }
// let area =  MathUtil.areaOfCircle(2);
// console.log(area);
// Directaly accessible
// console.log(MathUtil.pi);

// class User{
//     static userCount = 0;
//     constructor(username){
//         console.log(`Hello ${username}`)
//         User.userCount++
//     }
//     static onlineUser(){
//         console.log(`There are ${this.userCount} users are online`)
//     }
// }
// const user1 = new User("Tanveer");
// const user2 = new User("Dani");
// console.log(User.userCount);
// User.onlineUser();

console.log("Inheritance");
// Inheritance:- allows a new class to inherit the properties and methods from
//               an exsisting class(parent --> child).
//  It helps in code reusability

// class Animal{
//     alive = true;
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping`)
//     }
// };
// class Rabbit extends Animal{
//     name = "Rabbit";
//     run(){
//         console.log(`The ${this.name} is running`)
//     }
// };
// class Fish extends Animal{
//     name = "Fish";
//     swim(){
//         console.log(`The ${this.name} is Swimming`)
//     }
// };
// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(fish.name);
// // rabbit.alive = false; // you can make change
// console.log(fish.alive);
// fish.swim();

console.log("Super KeyWord");
// The super keyword in JavaScript is used to access properties and methods
//  of an object's parent (or prototype). It has two main uses, both related
//  to Class inheritance

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name}'s speed is ${speed}`);
//     }
// }
// class Rabbit extends Animal{

//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`The ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }
// class Sparrow extends Animal{

//     constructor(name, age, flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
//      fly(){
//         console.log(`The ${this.name} can fly`);
//         super.move(this.flySpeed);

//     }
// }

// let rabbit = new Rabbit("Bunny",2,25);
// let sparrow = new Sparrow("Sparrow",5,250);
// sparrow.fly();
// rabbit.run();

console.log("Setter & Gettter");
//Getters and setters in JavaScript are special methods that allow you
//to define what happens when you get (read) or set (write) an object's
//property. They are often called accessor properties.

// class Person{
//     constructor(name,age){
//       this.name = name;
//       this.age = age;                    
//     }

//// setter is just set the thing but will not gonna make it readabl or not 
//// gonna print it but don't worry get will

//     set name(newName){
//         if(typeof newName === "string" && newName.length > 0){
//             this._name = newName;
//         }
//         else{
//             console.error("Name must be a string")
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge > 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a Number greater than zero")
//         }
//     }

//     get name(){
//         return this._name;
//     }
//     get age(){
//         return this._age;
//     }
//     // yooooou can even get somethig new.
//     get nameAge(){
//         return this._name+" "+this._age;
//     }

// }

// let person1 = new Person("Inouske",16);
// console.log(person1.name);
// console.log(person1.nameAge);

console.log("distucturing");
// The Destructuring Assignment in JavaScript is a syntax that makes it
// possible to unpack values from arrays, or properties from objects, 
//into distinct, named variables.
// for array ==> []
// for object ==> {}

// Example 1 ==> Swaping of value between two variable
// let a = 2;
// let b = 1;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// // Example 2&3 ==> Swaping of value between two elements of array
// const color = ["red","green","blue","black","white"];
// [color[0],color[4]] = [color[4],color[0]];
// console.log(color[4]);

// // Assign array element to array.
// const [fircolor,seccolor,thirdcolor,...extraColor] = color;
// console.log(extraColor)
// console.log(seccolor);

// Example 4 ==> Extract value from object
// Example 5 ==> Distucturing in function.

// function info({fullname,lastName,age,job = "Jobless"}){
//     console.log(`name: ${fullname}`);
//     console.log(`lastname: ${fullname}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
// const person1 = {
//     fullname: "Daniyal",
//     lastName: "Si",
//     age: "1",
//     job: "Badmooshi"
// }
// const person2 = {
//     fullname: "Daniyal",
//     lastName: "Sid",
//     age: "1",
// }
// const {fullname,lastName,age,job = "Jobless"} = person2;
// console.log(fullname);
// console.log(lastName);
// console.log(age);
// console.log(job);

// info(person1);