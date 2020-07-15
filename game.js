// readlineSync Dependency - https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');
//Character Selection
console.clear();

console.log("Welcome to the arena!!!");

// This is to delay the second message the user sees after joining the game.
setTimeout(
    () => {
        console.clear();
        console.log("Choose your character!");
    }, 
    3000
    );
    
let testCharacters = [
    {name: "John", description:"This is a sentence."},
    {name: "Darryl", description:"This is a sentence."},
    {name: "Daniel", description:"This is a sentence."}
]


//Get matched against another fighter

//create a pool of fighters that are available

// start a fight with a cpu fighter

// match resolution

// game resolution if won all matches 

// turn clock for opponents during the round

