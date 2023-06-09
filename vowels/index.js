// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // Method 1
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   str.toLowerCase().split("").forEach(char => {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   });

//   return count;
// }

// // Method 2
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = str.toLowerCase().split("").reduce((prev, curr) => {
//     if (vowels.includes(curr)) {
//       prev++;
//     }
//     return prev;
//   }, 0);

//   return count;
// }

// Method 3
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}





module.exports = vowels;
