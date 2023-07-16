let prompt = require("prompt-sync")();
let log = console.log
let tax = 0
let balance = 0

let earnings = (parseInt(prompt("Enter amount")))
if(earnings <= 30000) tax = 15 / 100 * earnings
else if(earnings > 30000) tax = 20 / 100 * earnings
balance = earnings - tax
log("Earnings is: " + earnings + "\n" + "Tax is: " + tax +
 "\n" + "Your balance is:" + balance)