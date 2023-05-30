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

function steps(n) {
  // // console.log("Current n: ", n);
  // if (n === 1) {
  //   console.log("#");
  //   return;
  // }

  // if (n > 1) {
  //   steps(n - 1);
  //   let output = "";
  //   for (let i = 1; i <= n; i++) {
  //     output += '#';
  //   }

  //   // console.log("Current output: ", output);
  //   console.log(output);
  // }

  // console.log('n: ', n);

  if (n === 1) {
    console.log("#");
    return;
  }

  let textArr = [];

  let text = '';
  for (let i = 1; i <= n; i++) {
    text += '#';
    textArr.push(text);
  }

  textArr.forEach(t => {
    const numOfSpace = n - t.length;
    for (let j = 1; j <= numOfSpace; j++) {
      t += " ";
    }
    console.log(t);
  });


}

module.exports = steps;
