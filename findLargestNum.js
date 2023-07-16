const prompt = require('prompt-sync')();
let log = console.log
let counter = 0
let largestNumberInput = 0

while(counter < 10){
let numberInput = (parseInt(prompt("Enter integers: ")));
if(numberInput > largestNumberInput) largestNumberInput = numberInput
if(counter > 8) log("Most recent integer entered: " + numberInput)
counter++
}
log("The largest number entered is: " + largestNumberInput)