let log = console.log

let arrayNums = [2, 3, 35, 22, 28, 40, 40]
let highestNum = 0;
let secondHighestNum = 0;
for(let index = 0; index < arrayNums.length; index++){
    if(arrayNums[index] > highestNum) highestNum = arrayNums[index];
    else if( arrayNums[index] > secondHighestNum && arrayNums[index] < highestNum){
        secondHighestNum = arrayNums[index]
    }

}
log(highestNum)
log(secondHighestNum);

const myArray = [1, 2, 3];
const doubleArray = myArray.map(num => num * 2);
// log(doubleArray)