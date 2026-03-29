//Cover map and filter from handbook

//Reduce only 

//To find sum
const arr = [10,2,3,4,95,6];
function calculateSum(num){
    let sum = 0;
    for(let i = 0; i<num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}
console.log(calculateSum(arr));

const result = arr.reduce(
    function (acc,curr){ // curr  is the current valu of arr and
                         // acc is accumelating the values
        acc = acc + curr;
        return acc;
    }, 0);//passing initial value to acc
    console.log(result);

    //

    // Finding max
function calculateMax(num){
    let max = Number.MIN_VALUE;
    for(let i = 0; i<num.length; i++){
        if(max < num[i]){
            max = num[i];
        }
    }
    return max;
}
console.log(calculateMax(arr));

const result1 = arr.reduce(
    function (acc,curr){ 
        if(acc < curr){
            acc = curr;
        }
        return acc;
    }, Number.MIN_VALUE);
    console.log(result1);

    //Real life que on map and reduce

const users = [
    {firstName:"Akshay",lastName: "Sani", age: 26},
    {firstName:"Cristiano",lastName: "Ronaldo", age: 40},
    {firstName:"Patric",lastName: "Batman", age: 35},
    {firstName:"Light",lastName: "Yagami", age: 26},
];
    //Q-1 Map the first name with the lastname

    //Just taking first name and last name and mapping them
    // into ans array
    const output = users.map(function (x){
        return x.firstName+" "+x.lastName;
    });
    console.log(output);

    //Q-2 Make an array of ages where you can see how many peoples
    //of different ages are present in array
    //{26:2 , 50: 1} like it

    const output1 = users.reduce(
        function(acc,curr){
            if(acc[curr.age]){
                acc[curr.age]  = ++acc[curr.age];
            }
            else{
                acc[curr.age] = 1;
            }
            return acc;
        },{});

console.log(output1);

// Q-3 Firstname of all the people with age > 30

const output3 = users.filter(function(x){
    return x.age < 30; //filtering the list
}).map((x) => x.firstName); // creating arr from filtered list
console.log(output3);

//using reduce
const output4 = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc = curr.firstName
    }
    return acc;
},{});
console.log(output4);
