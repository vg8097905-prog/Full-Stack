// Temporal dead zone & Variable Scoping

// Temporal dead zone - jaha par value ko access karna possible nahi hai through let and const.

// console.log(marks);
// console.log("babbar");
// console.log("Love");

// const marks = 100;
// console.log(marks);


// let and const are blocked scope
// {
//     var age = 100;
// }

// console.log(age);
 

// var is not blocked scope
// console.log(height);
// {
//     var height = 180;
// }

// console.log(height);


// Function Scoped
// console.log(fullName);
// function sayHello() {
//     // var,let,const all are functioned scope not access out of function.
//     const fullName = "Earth";
//     console.log("Hello Dunia ", fullName);
// }
// console.log(fullName);
// sayHello();





// //global scope
// const age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true ){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();