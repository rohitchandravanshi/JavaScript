//Crerate 3 divs with common class name - "box". Access them & add some unique text to each of them.

let boxes = document.querySelectorAll(".box");

// boxes.innerText = boxes.innerText + "yes!";

// console.dir(boxes);
// console.log(boxes);

// boxes[0].innerText = "New text 1"
// boxes[1].innerText = "New text 2"
// boxes[2].innerText = "New text 3"

let idx = 1;

for(div of boxes){
    div.innerText = `new unique value ${idx}`;
    idx++;
}