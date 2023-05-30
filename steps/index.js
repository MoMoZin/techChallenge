// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // Method 1 by me
// function steps(n) {

//   // recursive attempt without space
//   // // console.log("Current n: ", n);
//  //basecase
//   // if (n === 1) {
//   //   console.log("#");
//   //   return;
//   // }

//   // if (n > 1) {
//   //   steps(n - 1);
//   //   let output = "";
//   //   for (let i = 1; i <= n; i++) {
//   //     output += '#';
//   //   }

//   //   // console.log("Current output: ", output);
//   //   console.log(output);
//   // }
//   // console.log('n: ', n);

// // recursive refactored
// if (n === 0) {
//   return;
// }

// steps(n - 1);

// let output = "";
// for (let i = 1; i <= n; i++) {
//   output += '#';
// }

// console.log(output);

// normal method
//   if (n === 1) {
//     console.log("#");
//     return;
//   }

//   let textArr = [];

//   let text = '';
//   for (let i = 1; i <= n; i++) {
//     text += '#';
//     textArr.push(text);
//   }

//   textArr.forEach(t => {
//     const numOfSpace = n - t.length;
//     for (let j = 1; j <= numOfSpace; j++) {
//       t += " ";
//     }
//     console.log(t);
//   });
// }

// // Method 1
// function steps(n) {

//   //    C0  C1  C2 
//   // R0  #   -   -
//   // R1  #   #   -
//   // R2  #   #   #

//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     //if current column is equal to or less than the current row, add #, otherwise add space
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += "#";
//       }
//       else {
//         stair += " ";
//       }
//     }

//     //print the result
//     console.log(stair);
//   }

// }

// Method 2
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    //print the finished row 
    console.log(stair);
    //calling recursive to go to next row
    return steps(n, row + 1);
  }

  stair += stair.length <= row ? "#" : " ";

  //calling recursive to add # or space to current row
  steps(n, row, stair);

}

module.exports = steps;
