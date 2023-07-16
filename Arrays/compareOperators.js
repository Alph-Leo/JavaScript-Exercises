function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
      return false;
    }
  
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    return true;
  }

  let a = {name:'Remi', age: 5}
  let b = {name:'Remi', age: 2}
  
  let operators = deepEqual(a, b);
  console.log(operators);