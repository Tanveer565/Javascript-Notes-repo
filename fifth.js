console.log("Nested objects")

//// nested objects = Objects inside of other Objects.
// Allows you to represent more complex data structures
//Child Object is enclosed by a Parent Object

//Person{Address{}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person2 = new Person("Patrick", 37,   "128 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

console.log(person1.name);
console.log(person1.age); 
console.log(person1.address);                                   
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);


console.log("Arrays object");

const fruits = [{name:"apple", color: "red", calories: "87"},
               {name:"Mango", color: "Yellow", calories: "907"},
               {name:"aadokado", color: "nako", calories: "87"}];

console.log(fruits[2].color);

[fruits[2].name , fruits[1].name] = [fruits[1].name , fruits[2].name]

console.log(fruits[2].name);
console.log(fruits[1].name);

fruits.push({name:"apple", color: "red", calories: "87"});

console.log(fruits);

//itrating to name
fruits.forEach(fruit => console.log(fruit.name));



console.log("sort");
//method used to sort elements of an array in place.
//sorts element as string in lexicographic order not alpha
//lexicographic = (alphabet + numbers + symbol)

// let fruit = ["m","c","a"];

let num = [1,9,8,7,5,6,10]; 

// he compare function (a, b) => a - b tells JavaScript how to determine the relative order of two elements (a and b):
// If the result is negative (< 0): a is sorted before b
// If the result is positive ($> 0$): $b$ is sorted before $a$.
// If the result is zero ($0$): The order remains unchanged.

// console.log(num.sort((a , b) => a - b ));

console.log("Date");

//current date and time
const now = new Date();
console.log(now);

//custom date and time

const custom = new Date(2026 , 1, 22 , 4 ,44 ,33);
console.log(custom);

// Getting individually
const year = now.getFullYear();
console.log(year);

const month = now.getMonth();
console.log(month);

const date = now.getDate();
console.log(date);

const hour = now.getHours();
console.log(hour);

//setting individually

now.setFullYear(2025);
now.setMonth(4);
now.setDate(28);


console.log(now);
