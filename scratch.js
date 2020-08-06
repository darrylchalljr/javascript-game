function findFighter (array,value){
    array.forEach(element => {
        (element.name == value) ? console.log("found")
    });
};
findFighter (availableFighters,unvalidatedChar)


function isValid (array,value){
    if(array.findIndex(element => element.name === value)){
        return true;
    } else {
        return false;
    }

if (validFighter){
    validatedChar = unvalidatedChar;

    } else {
    console.log("Please choose again!");
    validateCharacter()
}