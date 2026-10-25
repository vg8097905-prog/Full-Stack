// Call Stack & Hosting



// variable hoisting
// var greet;
// console.log(greet)

// var greet = function() {
//     console.log("Namaste Dunia");
// }


//function  used as property of object
// let obj = {
//     age:25,
//     wt: 36,
//     ht:180,
//     greet: ()=>{
//         console.log("hello Dunia");
//     }
// }

// console.log(obj.age);
// obj.greet();



// use in data structure (array)
// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     }
// ];

// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);


// return function
// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }

// let ans = solve(5);

// let finalAns = ans(10);
// console.log(finalAns);



// Function as an argument
// function greetMe(greet, fullName) {
//     console.log("hello ", fullName);
//     greet();
// }


// function greet() {
//     console.log("Greeting for the day")
// }

// greetMe(greet, "Babbar");




// class level hosting not possible.
// const object1 = new Human();
// class Human {

// }


// if function expression held then hosting not occur only occur in plain function.
// This is function expression
// sayHello();
// let sayHello = function() {
//     console.log("Hello Jee, kaise ho saare");
// }




// Variable hoisting and function hoisting only in var not in let or const.
// console.log(age);
// const age = 25;



// {


// in this case before compilation only variable declaration gone to the top of the scope not value.
// console.log(age);
// var age = 25;




// IN this case before compilation whole function declaration shift top of the scop or block .

// This is a plain function.
// // sayMyName("Babbar");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

// }