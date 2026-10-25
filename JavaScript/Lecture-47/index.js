// Classes , Get/Set Default Parameter in Functions

// Default Constructor

// Single Parameter
// function sayName(myName = "Vicky"){
//     console.log("My name is:",myName);
// }
// sayName("Vivek");

// Multiple Parameter
// function sayName(fName,lName = "Gupta"){
//     console.log("My name is:",fName,lName);
// }
// sayName("Vivek");


// function sayName(fName = "Vivek",lName ="Gupta") {
//     console.log("My Name is: ", fName,lName);
// } 
// sayName();


// one parameter depend on another parameter
// function sayName(fName = "Uday", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName," ", lName);
// } 
// sayName();


// how to obj in parameter
// function solve(value={age:15,wt:90,ht:190}){
//     console.log("HellO JII",value);
// }
// solve();

// How to use array in parameter
// function solve(value=["Vivek","Gupta",20]){
//     console.log("HellO JII",value);
// }
// solve();



// function solve(value){
//     console.log("HellO JII",value);
// }
// solve(14);


// function solve(value="String"){
//     console.log("HellO JII",value);
// }
// solve();


// function solve(value="Rahul"){
//     console.log("HellO JII",value);
// }
// solve(null);
// solve(undefined);


// How to use function in parameter
// function getAge() {
//     return 19;
// }
// function utility(name = "Vivek", age = getAge()) {
//    console.log(name,age); 
// }

// utility();



// Constructor
// class Human {
//     //properties
//     age; // public
//     #wt = 80; //private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     //behaviour

//     #walking(){
//         console.log("I am Walking ", this.#wt);
//     }

//     running() {
//         console.log("I am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);

// obj.walking();




// class Human{
//     // Properties
//     age=13;
//     #wt=80;
//     ht=180;

//     // behaviour

//     walking(){
//         // private member access inside the class only not the outside of the class.
//         console.log("I am walking", this.#wt);
//     }
//     running(){
//         console.log("I am running")
//     }
//     // for accessing outside the class we use getter and setter.
//     // features:-Symentic clarity add on code,Encapsulation,provide a typr of data production.
//         get fetchWeight() {
//         return this.#wt;
//     }
//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human();
// // Setter
// obj.modifyWeight = 95;
// console.log(obj.age);
// console.log(obj.wt);
// let w = obj.fetchWeight;
// console.log(w);
// // console.log(obj.fetchWeight);
// console.log(obj.ht);
// obj.walking();
// obj.running();