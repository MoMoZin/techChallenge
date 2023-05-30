// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  //   //    C0  C1  C2 
  //   // R0  -   #  -
  //   // R1  #   #  #


  //   //    C0  C1  C2  C3  C4
  //   // R0  -   -   #   -   -
  //   // R1  -   #   #   #   -
  //   // R2  #   #   #   #   #

  const totalCols = n + n - 1; //n*2-1
  const middle = Math.floor(totalCols / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < totalCols; col++) {
      if (col <= middle + row && col >= middle - row) {
        level += "#";
      }
      else {
        level += " ";
      }
    }

    //print the result
    console.log(level);
  }

}

module.exports = pyramid;
