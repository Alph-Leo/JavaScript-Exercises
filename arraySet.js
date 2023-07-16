let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

let newSet = [];
let sum = 0;
for(let i = 0; i < set1.length; i++){
    if(set2.includes(set1[i])){
    newSet.push(set1[i])
    }
}
    for(let j = 0; j < newSet.length; j++){
        sum += newSet[j]
        
    }
  
  console.log(newSet)
   console.log(sum) 

   let set1a = [3, 1, 7, 9];
let set2b = [2, 4, 1, 9, 3];
let newList = [];
let sums = 0

for(let i = 0; i < set1a.length; i++){
    for(let j = 0; j < set2b.length; j++){
    if (set2b !== set1a[i]){
        newList.push(set1a[i]);
    }
   }   sums = newList[0] + newList[1] + newList[2];
}console.log(newList)
console.log(sums);