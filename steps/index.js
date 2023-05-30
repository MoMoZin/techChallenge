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

// Method 1
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      }
      else {
        stair += " ";
      }
    }
    console.log(stair);
  }

}

module.exports = steps;
