function toJadenCase(words){
    let arrayWord = words.split(' ');
    for(let letter = 0; letter < arrayWord.length; letter++){
         arrayWord[letter] = arrayWord[letter].charAt(0).toUpperCase() + arrayWord[letter].slice(1);
    } 
        
 return arrayWord.join(' ');
    
}
let toUpper = toJadenCase("how can mirrors be real if our eyes are not real");
console.log(toUpper);