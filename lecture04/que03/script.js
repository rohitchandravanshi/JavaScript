//Create an array to store compaines -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

console.log(arr);

// Q.a. Remove the first company from the array
// arr.splice(0, 1)
// console.log(arr);

arr.shift()
console.log(arr);

//Q.2 Remove Uber & add Ola its Place
arr.splice(1, 1 , "Ola")
console.log(arr);

//Q.3 Add Amazon at the end
// arr.splice(5, 0 , "Amazon")
// console.log(arr);

arr.push("Amazon")
console.log(arr);
