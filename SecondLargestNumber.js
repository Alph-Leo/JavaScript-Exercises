const prompt = require("prompt-sync")();
let log = console.log

let arrayNums = []
let highestNum = 0;
let secondHighestNum = 0;
let counter = 0;
while( counter < 10){
    arrayNums = prompt("Enter integers: ")
for(let index = 0; index < arrayNums.length; index++){
    if(arrayNums[index] > highestNum) highestNum = arrayNums[index];
    else if( arrayNums[index] > secondHighestNum && arrayNums[index] < highestNum){
        secondHighestNum = arrayNums[index]
    }
}
counter++;
}
log("Largest input: " + highestNum)
log("Second Largest input: " + secondHighestNum);