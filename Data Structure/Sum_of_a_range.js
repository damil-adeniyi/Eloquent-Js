
// const range = (start, end, step=1) => {
//     let set = [];
//     if (step > 0){
//         for (let i = start; i <= end; i+=step){
//             set.push(i);
//         }
//     }else {
//         for (let i = start; i >= end; i+=step){
//             set.push(i);
//           }
//         }
//     return set;
// }


// console.log(range(1, 10));
// console.log(range(10, 1, -2));


// const sum = (nums) => {
//     let total =0;
//    for (num of nums) total+= num;
//    return total;
// }

// console.log(sum(range(10,1, -2)));


const doscogros  = () => {
   let  score = 20;
   let dozen = 12;
   let gross = 144;
   return score + dozen + gross;
}

console.log(doscogros()+ 123);