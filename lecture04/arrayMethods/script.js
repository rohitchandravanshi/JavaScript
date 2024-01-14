// let veggies = ["potato", "tomato", "brinjal"];
// console.log(veggies);

// veggies.push("pumpkin", "radish", "carrot");

// console.log(veggies);

// veggies.pop();
// console.log(veggies);

// console.log(veggies.toString());

// let fruits = ["apple", "mango", "banana", "litchi"]
// let dryfruits =["cashew", "almond", "peanut", "pastachio"]

// let fooditems = veggies.concat(fruits, dryfruits);
// console.log(fooditems);

// let val = fooditems.unshift("groundnut");
// console.log(fooditems);

// let val2 = fooditems.shift("groundnut");
// console.log(fooditems);

// console.log(veggies.slice(1, 3));



//splice method

let arr = [12, 23, 45, 45, 47]

arr.splice(2, 1, 25);
console.log(arr);

arr.splice(2, 0, 24);
console.log(arr);


arr.splice(2);
console.log(arr);

arr.splice(2, 0, 88, 99, 77, 55);
console.log(arr);

arr.splice(4, 1);
console.log(arr);