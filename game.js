/* Todos:
1: Add validation logic to character selection.
*/

// readlineSync Dependency - https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');

//create a pool of fighters that are available
class Attack {
    constructor(name,type,damage,coolDown){
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.coolDown = coolDown;
    }
}
// Common moves:
const jab = new Attack("Jab","Punch",10,0);
const lowKick = new Attack("Low Kick","Kick",12.5,0);
const highKick = new Attack("High Kick","Kick",15,1);

// Fighter-specific moves:
const rufusSpecial = new Attack("Gut Punch", "Special",25,2);

class Fighter {
    constructor(name,description,hp,...attacks){
        this.name = name;
        this.description = description;
        this.hp = hp;
        this.moves = [jab,lowKick,highKick].concat(attacks);
    }
}


let rufus = new Fighter("Rufus","A description of Rufus",100,rufusSpecial);
let billy = new Fighter("Billy","This is billy.",100)
let availableFighters = [rufus,billy];
//Get matched against another fighter

// start a fight with a cpu fighter

// match resolution

// game resolution if won all matches 

// turn clock for opponents during the round

//Character Selection
console.clear();

console.log("Welcome to the arena!!!");

// This is to delay the second message the user sees after joining the game.
setTimeout(
    () => {
        console.clear();
        console.log("Choose your fighter!");

// Displays the names of the characters in the testCharacters Array.
        for(i = 0; i < availableFighters.length; i += 1){
            console.log(availableFighters[i].name);
        }
        console.log("\n"); //adds a line break after the list of fighters.
//Gives the user the ability to type the name of the fighter they choose.
        let myCharacter = readlineSync.question("Fighter?: ")
    }, 
    3000
    );