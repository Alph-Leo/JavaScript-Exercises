function createNumberArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
      if(start > end )  end = start
    }
    return arr;
  }

  let result = createNumberArray(10, 5)
  console.log(result)

  function sumArrays(numbers){
    let sum = 0;
    for(let index = 0; index <= numbers; index++){
        sum += index;
    }
    return sum
  }

  let sumUp = sumArrays(10);
//   console.log(sumUp);