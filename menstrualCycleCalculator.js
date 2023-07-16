let prompt = require("prompt-sync")();

function MenstrualCycle(){
         
    const startDate = (prompt("Enter starting date e.g mm/dd/yyyy "));
    const date = new Date(startDate);
    
    const cycleLenght = parseInt(prompt("Enter cycle lenght "));

     const nextPeriodDate = new Date(date.getTime() + cycleLenght * 24 * 60 * 60 * 1000);

     return{ cycleLenght, 
        nextPeriodDate
     };

}

const {cycleLenght, nextPeriodDate} = MenstrualCycle();
const periodDate = nextPeriodDate.toLocaleDateString();
console.log(periodDate, cycleLenght);
