const prompt = require("prompt-sync")();
let log = console.log;

while(true){
    let userInput = (parseInt(prompt("Guess my day: ")));
    if(isNaN(userInput) || userInput < 1 || userInput > 31 || userInput != 27){
        log("Incorrect guess, try again");
    continue;
    }
     else if(userInput === 27) log("Correct guess: " + userInput);
    break;
    }