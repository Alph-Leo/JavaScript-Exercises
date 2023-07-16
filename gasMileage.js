let prompt = require("prompt-sync")();
let log = console.log
 
let totalMiles = 0;
let totalGallons = 0;

while (true) {
  let milesDriven = parseInt(prompt("Enter miles driven for this trip:"));
  let gallonsUsed = parseInt(prompt("Enter gallons used for this trip:"));

  if (isNaN(milesDriven) || isNaN(gallonsUsed) || milesDriven == 0 || gallonsUsed == 0) {
    log("Invalid input, please try again.");
    continue;
  }
  let milesPerGallon = milesDriven / gallonsUsed;
  totalMiles += milesDriven;
  totalGallons += gallonsUsed;

  let overallMilesPerGallon = totalMiles / totalGallons;
  log(`This trip: ${milesPerGallon} miles per gallon\nOverall: ${overallMilesPerGallon} miles per gallon`);

  let answer = prompt("Do you want to input another trip? (y/n)").toLowerCase();
  if (answer === "n") {
    break;
  }
}
 