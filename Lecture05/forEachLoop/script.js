// let arr = ["pune", "delhi", "Maharastra", "Delhi"]

// arr.forEach(function(val){
//     console.log(val);
// });

// arr.forEach((val, idx, arr)=>{
//     console.log(val, idx, arr)
// });

//Q. For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [2, 3, 4, 5, 6];

// arr.forEach((val) => {
//   console.log(val * val);
// });



let arr = [2, 3, 4, 5, 6]

let calSquare = (val) => {
   console.log(val*val)
} 
arr.forEach(calSquare);
