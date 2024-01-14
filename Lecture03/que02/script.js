//Q2. 
//Create a game where you start with any random game number. Ask the user to keep guessing the number until the user enters correct value.

let gameNum = 25;

let userNUm = prompt("Enter the game number:");
console.log(userNUm);

while(userNUm != gameNum){
    userNUm = prompt("You enter wrong number. Guess again:");
}

console.log("Congratulation, You entered the right number")