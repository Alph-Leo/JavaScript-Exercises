const prompt = require("prompt-sync")();
let log = console.log

function encryption(numbers){
   let firstInteger = (numbers / 1000)
   let secondInteger = (numbers % 1000) / 100;
   let thirdInteger = (numbers % 100) / 10;
   let fourthInteger = numbers % 10;

   let digit1 = (firstInteger + 7) % 10;
   let digit2 = (secondInteger + 7) % 10;
   let digit3 = (thirdInteger + 7) % 10;
   let digit4 = (fourthInteger + 7) % 10;

   let encryptedNumber = digit1 * 10 + digit3 * 1000 + digit4 * 100 + digit2;

   return encryptedNumber;

}