let prompt = require("prompt-sync")();
let log = console.log

let accountNo = 12345
let beginningBalance = 2000
let totalMonthlyCharge = 500
let totalMonthlyCredit = 1000
let creditLimit = 1500
let newBalance = beginningBalance + totalMonthlyCharge - totalMonthlyCredit

if (newBalance > creditLimit){
 log("Credit limit exceeded! \n" + "Credit limit: " + creditLimit +"\nnew balance: " + newBalance)
}
else log("You're legit! \n" + "new balance: " + newBalance)