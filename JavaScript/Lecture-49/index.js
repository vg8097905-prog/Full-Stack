// Object Cloning && Garbage Collector in JS


// why obj is dynamic in nature- Because in runtime obj changes its state or definition.
// let obj = {
//     age:12,
//     wt:68,
//     ht:180
// };

// console.log(obj)
// obj.color = "White";
// console.log(obj)


// How to cloning ?


let src = {
    age:12,
    wt:68,
    ht:180
};

// this is obj reference
// let dest = src;
// src.age = 90;
// console.log("src: ", src);
// console.log("dest: ", dest);


// this is obj cloning using Spread Operator
// let dest = {...src};
// src.age = 90;
// console.log("src: ", src);
// console.log("dest: ", dest);


// this id obj cloning using assign operator.
// let src2 = {
//     value:101,
//     name: "Vivek Gupta"
// }

// let dest = Object.assign({}, src, src2);
// src.age = 90;
// console.log("src: ", src);
// console.log("dest: ", dest);




let dest = {};
// obj cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;
console.log("src: ", src);
console.log("dest: ", dest);



