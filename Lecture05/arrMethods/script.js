// Map

// let num = [25, 24, 26, 28];

// let newArr = num.map((val) =>{
//     return val*val;
// });

// console.log(newArr);

//Filter

// let arr = [21, 22, 23, 24, 25, 26, 27, 28];

// let newArr = arr.filter(
//     (val)=>{
//         return val % 2 === 0;
//     }
// )
// console.log(newArr);

//Reduce
// let arr = [1, 2, 3, 4];

// const output = arr.reduce((pres, curr) => {
//   return pres + curr;
// });

// console.log(output);


//reduce
let arr = [1, 2, 3, 4, 25];

const output2 = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output2);