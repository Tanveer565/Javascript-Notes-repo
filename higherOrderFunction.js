const radius = [1, 2, 3, 4];

//Insted of these we are using higher order function

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));
// console.log(calculateArea(radius));

const area = function (radius){
    return Math.PI * radius * radius;
}
const circumference = function (radius){
    return 2 * Math.PI * radius;
}
const diameter = function (radius){
    return 2 * radius;
}

const calculate = function (radius,operation) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(operation(radius[i]));
  }
  return output;
};

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// Lets convert above calculate function as map function and try to use. So,

Array.prototype.calculate = function(operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));

// Why use Array.prototype.calculate?
// When you attach a function to Array.prototype, you are making that function available to every single array created in your script.

// Before: You had a standalone function calculate(radius, operation). You had to pass the array in as an argument.

// After: You can call .calculate() directly on the array itself, just like a built-in method.

