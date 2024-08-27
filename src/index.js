console.log("Dice roller app is now running!")


/**
 * Generate a random number between 1 and diceSize, inclusive.
 * @param {number} diceSize The maximum that the dice can roll.  
 * @returns {number} The number rolled on the dice.
 */
function rollDice(diceSize = 20){
    let diceResult = 0;

    diceResult = Math.ceil(Math.random() * diceSize);

    return diceResult;

}

// console.log("Random dice roll result is: " + rollDice());

// const prompt = inquirer.createPromptModule();

// prompt([
//     {
//         type: "number",
//         name: "dice_size",
//         message: "What size of dice do you want to roll?"
//     }
// ]).then((answer) => {
//     console.log("Raw answer data from the prompt package is: " + JSON.stringify(answer));
//     console.log(rollDice(answer.dice_size));
// });

const prompt = require('prompt-sync')({signit: true});

try {let userDiceSize = prompt('What size dice do you want to roll? ');

    // check if user entered a number
    if (Number.isNaN(userDiceSize)){
        throw new Error("User did not enter a numeber");
    }
    
    // check if number is valid (1 or greater, whole number)
    let userInputAsNumber = parseInt(userDiceSize);
    
    
    console.log(rollDice(userInputAsNumber));
} catch (error) {
    console.log("Error occured!");
    console.log(error);
}

