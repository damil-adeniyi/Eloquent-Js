// The first, reverseArray, should take an array as its argument and produce a 
// new array that has the same elements in the inverse order. 

// const reverseArray = (Arr) => {
//    let newArr = [];
//    for(i=Arr.length -1; i>=0; i--) newArr.push(Arr[i])
//     return newArr;
// }

// console.log(reverseArray(["C", "B", "A"]))

const reverseArray = (Arr) => {
    let newArr = [];
    for(i=Arr.length -1; i>=0; i--) newArr.push(Arr[i])
    for(let char of newArr){
         console.log(char);
    }
 }

reverseArray([12,34,56]);