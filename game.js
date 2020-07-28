/* Todos:
1: Rename testFight to proper name
2: Ensure figher selection gets passed into starting match correctly
3: Validate user entry for move selection
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
let validatedChar;
//Get matched against another fighter

// match resolution

// game resolution if won all matches 

// turn clock for opponents during the round

//Character Selection
console.clear();

// console.log("Welcome to the arena!!!");

// This is to delay the second message the user sees after joining the game.
// setTimeout(
//     () => {
//         console.clear();
//         console.log("Choose your fighter!");


// // Displays the names of the characters in the testCharacters Array.
//         for(i = 0; i < availableFighters.length; i += 1){
//             console.log(availableFighters[i].name);
//         }
//         console.log("\n"); //adds a line break after the list of fighters.
        
        
// //Gives the user the ability to type the name of the fighter they choose.
//         function validateCharacter () {
//             function getCharacter (){
//                 unvalidatedChar = readlineSync.question("Fighter?: ")
//             }        
//             getCharacter();
    
//             if (
//                 availableFighters.find(
//                     (element) => {
//                         return (unvalidatedChar === element.name)
//                     }
//                 )
//             ){
//                 validatedChar = unvalidatedChar;
//             } else {
//                 console.log("Please choose again!");
//                 validateCharacter()
//             }
//             return validatedChar            
//         }
//         validateCharacter();
//         testFight(rufus,billy);
// },
//     1000
// );


//Start a fight with a cpu fighter
testFight(rufus,billy);

function testFight (validateCharacter, cpuOpponent) {

    // Component definitions
    const fightDelay = 1500;
    let userMove;

    function delayPrintMatchStart (printableFunctionsArray) {
        printableFunctionsArray.forEach(
            (element,index) => {
                setTimeout(
                    (elementPlaceholder) => {elementPlaceholder()},
                    fightDelay*index,
                    element)
            }
        )
    }

    function printMoves (playerCharacter) {
        playerCharacter.moves.forEach(
            (element,index,array) => {
                if (element.coolDown == 0) {
                    console.log(`(${index+1}) ${element.name}`)
                }
                else {
                    console.log(`(${index+1}) ${element.name}    CoolDown Time: ${element.coolDown} -- Fix this value so it decrements`)
                }
            }
        )
    }

    let thingsToPrint = [
        // ()=>{console.clear()},
        ()=>{console.log(`${validateCharacter.name} enters the ring!`)},
        // ()=>{console.clear()},
        ()=>{console.log(`${cpuOpponent.name} enters the ring!`)},
        ()=>{console.log("Get ready to fight!!!")},
        ()=>{console.log("3")},
        ()=>{console.log("2")},
        ()=>{console.log("1")}
    ];

    // Code execution
    delayPrintMatchStart(thingsToPrint);
 
    setTimeout (
        () => {
            console.log("Choose your move: ");
            printMoves(validateCharacter);
            userMove = readlineSync.question("");
            console.log(userMove);
        },
        fightDelay*(thingsToPrint.length+1)
    )
    // printMoves(validateCharacter);
}
// Idea to solve recurring setTimeout problem in section above, use with a .forEach or .map loop

