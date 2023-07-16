function countB(letters){
     letters = ['b', 'a', 'l', 'a', 'b', 'l', 'u'];
    bcounter = 0;

    for(let index = 0; index < letters.length; index++){
        if(letters[index] === 'b'){
            bcounter++;
        }
    }
    return bcounter;

}
let result = countB();
console.log(result);