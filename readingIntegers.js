let prompt = require("prompt-sync")();
let log = console.log;

let firstNumber = (parseInt(prompt("Enter an integer: ")));
log(firstNumber);
let sum = 0;

while(sum < firstNumber){
    let subsequentNumbers = (parseInt(prompt("Enter numbers  ")));
    sum += subsequentNumbers;
    
}
log("Total sum:" + "  " + sum);