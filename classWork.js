let log = console.log

/*function sum(number, func){
    return number + func(number);
}
let answer = sum(4, (number) => {return number * 2});
 log(answer);*/

let arrayNumbers = [2, 3, 3, 4, 1, 1, 12, 4];
let uniqueValues = [];
for(let index = 0; index < arrayNumbers.length; index++){
    if(! uniqueValues.includes(arrayNumbers[index])){
        uniqueValues.push(arrayNumbers[index]);
    
}
}
    // log(uniqueValues);

 let numbers = [1, 2, 3, 4, 5]
 log(typeof[])