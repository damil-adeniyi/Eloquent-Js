// Write a function called countBs that takes a string as its only argument and returns a number that 
// indicates how many uppercase B characters there are in the string.


// function countBs(str){
//     let total = 0;
//     for(char of str) if (char === "B") total+= 1;
//     return total;
// }

// Next, write a function called countChar that behaves like countBs, except it takes a second argument 
// that indicates the character that is to be counted (rather than counting only uppercase B characters).

function countChar(str, chr){
    let total = 0;
    for(letter of str) if (letter === chr) total+= 1;
    return total;
}


function countBs(str){
    return countChar(str, "B");
}

console.log(countBs("basit"));
