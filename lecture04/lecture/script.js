// let marks = [97, 58, 88, 85, 98]
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "thor", "hunk", "shaktiman" , "spiderman"]
// console.log(heroes);


let heroes = ["ironman", "thor", "hunk", "shaktiman" , "spiderman"]

for(i=0; i<(heroes.length); i++){
    console.log(heroes[i]);
}

// for of
for(let hero of heroes){
    console.log(hero.toUpperCase());
}