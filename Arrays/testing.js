// console.log(sum(2, 3));
let sum = (firstNumber, secondNumber)=>{
    return firstNumber + secondNumber;
}
// console.log(sum(2, 3));

// function sum(firstNumber, secondNumber){
    // return firstNumber + secondNumber;
// }
function printName(name){
    function printHello(){
        //  x = 20;
        // console.log(`Hello ${name}`)
    }
   printHello();
    // console.log(x);
}
printName();
// printName("Legend", 2, 3);

function index(base){
    return(Number) => Number * base;
}
let baseTwo = index(4);
// let baseThree = index(3);
console.log(typeof(baseTwo));
console.log(baseTwo);