// Q1. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.


// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College students"


// Q2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// console.log(divs[3]);
// console.log(divs[4]);

// for(div of divs){
//     console.log(div.innerText);
// }

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

