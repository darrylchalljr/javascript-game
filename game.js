// readlineSync Dependency - https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');
//Character Selection
console.clear();

console.log("Welcome to the arena!!!");

// This is to delay the second message the user sees after joining the game.
setTimeout(
    () => {
        console.clear();
        console.log("Choose your fighter!");

// Displays the names of the characters in the testCharacters Array.
        let numOfCharacters = testCharacters.length;
        for(i = 0; i < numOfCharacters; i += 1){
            console.log(testCharacters[i].name);
        }
        console.log("\n"); //adds a line break after the list of fighters.
//Gives the user the ability to type the name of the fighter they choose.
        let myCharacter = readlineSync.question("Fighter?: ")
    }, 
    3000
    );
    
    let testCharacters = [
        {name: "John", description:"This is a sentence."},
        {name: "Darryl", description:"This is a sentence."},
        {name: "Daniel", description:"This is a sentence."}
    ]
    
    //create a pool of fighters that are available


//Get matched against another fighter


// start a fight with a cpu fighter

// match resolution

// game resolution if won all matches 

// turn clock for opponents during the round

