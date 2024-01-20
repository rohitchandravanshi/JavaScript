let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
    
}

let box1 = document.querySelector("#box1");

box1.onmouseover= () => {
    console.log("You are inside div");
}