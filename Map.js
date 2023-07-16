let log = console.log;

let name = "you are so fried today and Malik what have you done that you are requesting for brain break"

let words = name.split(" ");
let firstEight = words.slice(0, 7);
let nextFive = words.slice(7, 12);
let lastSix = words.slice(12, 17);

let firstEightString = firstEight.join(" ");
let middleFiveString = nextFive.join(" ");
let lastSixString = lastSix.join(" ");

console.log(firstEightString + " " + lastSixString + " " + middleFiveString);

