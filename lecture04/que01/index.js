//Q. for a given array with of students ->[52, 55, 58, 88, 78]  Find the average marks of the entire class.

let arr = [52, 55, 58, 88, 78];

sum = 0;

for(i=0; i<(arr.length); i++){

    ave =((sum+=(arr[i]))/arr.length)
    
}
console.log(ave)




let marks = [51, 28, 25, 82, 58];

sum1 = 0;

for(let val of marks){
    sum1+=val;
}
let ave1 = (sum1/marks.length);
console.log(`Average marks = ${ave1}`)