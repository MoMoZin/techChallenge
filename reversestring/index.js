// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // method 1
// function reverse(str) {
//   // turn string into array
//   const resArray = str.split("");

//   // reverse the array
//   resArray.reverse();

//   // return the joined string
//   return resArray.join("");
// }

// // method 2
// function reverse(str) {

//   // for each character in the string, add to the new string, starting from last char index 
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// method 3
function reverse(str) {

  // for each character in the string, take the char and add it to the start of the new string
  let result = "";
  for (let char of str) {
    result = char + result;
  }

  return result;
}






module.exports = reverse;
