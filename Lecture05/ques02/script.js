//Q1. We are given array of marks of students.Filter out of thr marks of students that score 90+.

// let marks = [48, 58, 68, 82, 96, 98, 93, 58, 78];

// let marksA = marks.filter((val) => {
//   return val > 90;
// });

// console.log(marksA);


//Q2. Take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("Enter a number");
 
let arr = [];

for (let i=1; i<=n; i++){
    arr[i-1] = i;
    
}
console.log(arr);

//Use reduce method to calculate sum of all numbers in array. 
let sumofArr = arr.reduce(
    (res, curr)=> {
        return res +curr;
    }
)
console.log(sumofArr);

//Use reduce method to calculate product of all numbers in array. 
let productofArr = arr.reduce(
    (res, curr)=> {
        return res *curr;
    }
)
console.log(productofArr);