/* Todos:
1: Rename testFight to proper name
2: Ensure figher selection gets passed into starting match correctly
3: Account for complexity with cooldowns.
4: Make sure we have annotations for big chunks of code.
5: Convert numbers to words for damage and health e.g. 1-10 = low, 11-20 = moderate, etc.
*/


// readlineSync Dependency - https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');

class Attack {
    constructor(name,type,damage,coolDown){
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.coolDown = coolDown;
    }
    
}

class Fighter {
    constructor(name,description,hp,...attacks){
        this.name = name;
        this.description = description;
        this.hp = hp;
        this.moves = commonMoves.concat(attacks);
    }
}

// Fighter-specific moves:
const rufusSpecial = new Attack("Gut Punch", "Special",25,2);
const marcusSpecial = new Attack("Upper Cut", "Special",25,2);

// Common moves:
const commonMoves = [],
    availableFighters = [];
function createCommonMove (name,type,damage,coolDown){
    return commonMoves.push(new Attack(name,type,damage,coolDown));
};
createCommonMove("Jab","Punch",10,0);
createCommonMove("Low Kick","Kick",12.5,0);
createCommonMove("High Kick","Kick",15,1);


// create a pool of fighters that are available
function createFighter (name,description,hp,...attacks){
    return availableFighters.push(new Fighter(name,description,hp,...attacks));
};
createFighter ("Rufus","A description of Rufus",100,rufusSpecial)
createFighter ("Billy","This is billy.",100)
createFighter ("Marcus","Marcus is an old school brawler.",100,marcusSpecial)

let rufus = availableFighters[0],
    billy = availableFighters[1],
    marcus = availableFighters[2],
    validatedChar;

//Print the names of fighters.
function printFighterNames (fighterArray) {
    return fighterArray.forEach(
        (fighter) => console.log(fighter.name)
    )
};


/*
|---------------------------------------------------------------------|
|                                                                     |
|                           Start of the Game                         |
|                                                                     |
|---------------------------------------------------------------------|
*/

// Get matched against another fighter

console.log("Welcome to the arena!!!");

// This is to delay the second message the user sees after joining the game.
setTimeout(
    () => {
        console.clear();
        
        console.log("Choose your fighter!");

        // Displays the names of the fighters.
        printFighterNames(availableFighters);

        console.log("\n"); //adds a line break after the list of fighters.

//Gives the user the ability to type the name of the fighter they choose.
        function validateCharacter () {
            function getCharacter (){
                unvalidatedChar = readlineSync.question("Fighter?: ")
            }        
            getCharacter();

            if (
                availableFighters.find(
                    (element) => {
                        return (unvalidatedChar === element.name)
                    }
                )
            ){
                validatedChar = unvalidatedChar;
            } else {
                console.log("Please choose again!");
                validateCharacter()
            }
            return validatedChar            
        }
        validateCharacter();
        console.log(selectCPUopponent(availableFighters));
        // testFight(rufus,billy);
},
    1000
);

function selectCPUopponent (arrayOfFighters) {
        if (arrayOfFighters.length >= 1) {
            return arrayOfFighters[Math.floor(Math.random()*arrayOfFighters.length)];
        } else {
            console.log("You won!!!");
        }
};

function testFight (validatedCharacter, cpuOpponent) {

    // Component definitions
    const fightDelay = 500;
    let userMove;
    let cpuOpponentMove;
    let currentPlayerHealth = validatedCharacter.hp;
    let currentCPUHealth = cpuOpponent.hp;

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

    function validateMoveEntry (entry) {
        if (
            (entry < 1) 
            || 
            (entry > validatedCharacter.moves.length)
        ){
            console.log("Invalid entry. Pick a new move!");
            entry = readlineSync.question("")
            validateMoveEntry(entry);
        }
    };

    function chooseCPUMove (cpuMovesArray) {
        if (cpuMovesArray.length < cpuMovesArray.length + 1){
        cpuOpponentMove = Math.floor(Math.random()*cpuMovesArray.length)+1;
        }
        else {cpuOpponentMove = Math.floor(Math.random()*cpuMovesArray.length);
        }
    }
        // console.log(cpuOpponentMove);

    function calcAndDisplayDamage(chosenPlayerMove,generatedCPUmove) {
        // Calculates the value of damage.
        currentPlayerHealth -= cpuOpponent.moves[generatedCPUmove - 1].damage;
        currentCPUHealth -= validatedCharacter.moves[chosenPlayerMove - 1].damage;
        // Prints the damage done to both fighters.
                console.log(
                    `${cpuOpponent.name} hits ${validatedCharacter.name} with a ${cpuOpponent.moves[generatedCPUmove - 1].name} for ${cpuOpponent.moves[generatedCPUmove - 1].damage} damage. ${validatedCharacter.name} has ${currentPlayerHealth} remaining.`)

                console.log(
                    `${validatedCharacter.name} hits ${cpuOpponent.name} with a ${validatedCharacter.moves[chosenPlayerMove - 1].name} for ${validatedCharacter.moves[chosenPlayerMove - 1].damage} damage. ${cpuOpponent.name} has ${currentCPUHealth} remaining.`)

    };

    // End the fight
    function endFight(){
        if (currentPlayerHealth <= 0 && currentCPUHealth <= 0){
            console.log("Tie!");
            
        } else if (currentPlayerHealth <= 0) {
            console.log("You lost! Game Over.");
            
        } else {
            console.log("You won!");
        }
    };

    let thingsToPrint = [
        // ()=>{console.clear()},
        ()=>{console.log(`${validatedCharacter.name} enters the ring!`)},
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
            do{
                console.log("Choose your move: ");
                printMoves(validatedCharacter);
                userMove = readlineSync.question("");
                validateMoveEntry(userMove);
                chooseCPUMove(cpuOpponent.moves);
                calcAndDisplayDamage(userMove,cpuOpponentMove);
            } while(
                (currentPlayerHealth > 0) 
                && 
                (currentCPUHealth > 0)
                );
            endFight();
        },
        fightDelay*(thingsToPrint.length+1)
    )

    printMoves(validatedCharacter);
}
// Idea to solve recurring setTimeout problem in section above, use with a .forEach or .map loop