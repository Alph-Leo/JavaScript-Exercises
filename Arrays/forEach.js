function double(Number){
    console.log(Number * 2);
}
let Numbers = [3, 4, 5, 6, 1, 9];
Numbers.forEach((value, index) => double(value, index))

let doubleNumber = Numbers.map((value) => {
    return value * 2;
});
    console.log(doubleNumber);
    console.log(Numbers);
