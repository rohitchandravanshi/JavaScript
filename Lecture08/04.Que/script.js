let btn = document.querySelector("#btn");

let click = 0;

btn.addEventListener(("click"), function(){
    if (click == 0){
        btn.style.background = "white";
        click++
    }
    else{
        btn.style.background = "grey";
        click = 0
    }

})