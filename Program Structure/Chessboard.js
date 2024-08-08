// Chessboard

// Write a program that creates a string that represents 
// an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or 
// a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something 
// like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define 
// a binding size = 8 and change the program so that it works 
// for any size, outputting a grid of the given width and height.

let result = "";
for(let i = 1; i <= 64; i++) {
    if(result.length % 8 == 0) result += "\n";
    if(i % 2 == 0) {
        result += "#";
    }else{
        result += " ";
    } 

//    for(let j = 1; j <= 8; j++) {
//     // if(i % 2 == 0) {
//     //     result += "#";
//     // }else{
//     //     result += " ";
//     // } 
//     if(j % 8 == 0) result += "/n";
//    } return result;
   
    console.log(result);
    
}

// console.log(result);