
// for(let i=1; i<=5; i++){
//     console.log("i =", i);
// }

// console.log(i);

//while loop

// i = 1
// while(i<=5){
//     console.log("i=", i)
//     i ++;
// }

//Do while loop

// let i = 1;
// do {
//     console.log("i = " , i);
//     i++;
// } while(i<=10);

//for-of loop
// let str = "ApnaCollege";

// let size = 0;
// for(let i of str){
//     console.log("i is" , i)
//     size++
// }

// console.log("string size = ", size);

//for-in loop

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.4,
    isPass: true
}

for(let key in student){
    console.log("key = ", key, "value", student[key]);
}