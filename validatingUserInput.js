const prompt = require("prompt-sync")();
let log = console.log
while(true){
let userInput = (parseInt(prompt("Enter number between 1 and 2: ")));
if(isNaN(userInput) || userInput < 1 || userInput > 2){
    log("You can only enter numbers 1 or 2");
continue;
}
 else
log("number validated: " + userInput);
break;
}