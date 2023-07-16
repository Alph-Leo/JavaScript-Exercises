const prompt = require("prompt-sync")();
// Function to encrypt a four-digit integer
function encrypt(num) {
    // Get each digit of the number
    const digit1 = Math.floor(num / 1000);
    const digit2 = Math.floor((num % 1000) / 100);
    const digit3 = Math.floor((num % 100) / 10);
    const digit4 = num % 10;
  
    // Add 7 to each digit and get the remainder after dividing by 10
    const newDigit1 = (digit1 + 7) % 10;
    const newDigit2 = (digit2 + 7) % 10;
    const newDigit3 = (digit3 + 7) % 10;
    const newDigit4 = (digit4 + 7) % 10;
  
    // Swap the first and third digits, and the second and fourth digits
    const encryptedNum = newDigit3 * 1000 + newDigit4 * 100 + newDigit1 * 10 + newDigit2;
  
    // Return the encrypted number
    return encryptedNum;
  }
  
  // Function to decrypt an encrypted four-digit integer
  function decrypt(num) {
    // Get each digit of the number
    const digit1 = Math.floor(num / 1000);
    const digit2 = Math.floor((num % 1000) / 100);
    const digit3 = Math.floor((num % 100) / 10);
    const digit4 = num % 10;
  
    // Reverse the swapping of digits
    const decryptedNum = digit3 * 1000 + digit4 * 100 + digit1 * 10 + digit2;
  
    // Subtract 7 from each digit and get the remainder after dividing by 10
    const newDigit1 = (decryptedNum % 10 + 3) % 10;
    const newDigit2 = (Math.floor(decryptedNum / 10) % 10 + 3) % 10;
    const newDigit3 = (Math.floor(decryptedNum / 100) % 10 + 3) % 10;
    const newDigit4 = (Math.floor(decryptedNum / 1000) + 3) % 10;
  
    // Return the decrypted number
    return newDigit4 * 1000 + newDigit3 * 100 + newDigit2 * 10 + newDigit1;
  }
  
  // Reading the input number from user
  let inputNum = prompt("Enter a four-digit integer:");
  
  // Checking if the input is valid
  while (inputNum.length !== 4 || isNaN(inputNum)) {
    inputNum = prompt("Invalid input! Please enter a four-digit integer:");
  }
  
  // Converting the input to a number
  const num = parseInt(inputNum);
  
  // Encrypting the number
  const encryptedNum = encrypt(num);
  console.log(`Encrypted number: ${encryptedNum}`);
  
  // Decrypting the encrypted number
  const decryptedNum = decrypt(encryptedNum);
  console.log(`Decrypted number: ${decryptedNum}`);
  