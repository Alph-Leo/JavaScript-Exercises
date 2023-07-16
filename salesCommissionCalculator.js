const prompt = require("prompt-sync")();
let log = console.log

let wage = 200

let totalWeeklySales = (parseFloat(prompt("Enter total sales of the week: ")));
let weeklyBonusOnSales = 9 / 100 * totalWeeklySales
let commission = wage + weeklyBonusOnSales 

log(`Your weekly commission is: ${commission}`);