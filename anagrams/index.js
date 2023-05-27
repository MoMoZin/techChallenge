// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // method 1
// function anagrams(stringA, stringB) {

//   //if two strings length is not the same, it is not anagram for sure
//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   //remove space and ! from both string and change to lowercase
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   //create char map of stringA
//   const stringAObj = {};
//   stringA.split("").forEach(charA => {
//     if (!stringAObj[charA]) {
//       stringAObj[charA] = 1;
//     }
//     else {
//       stringAObj[charA]++;
//     }
//   });

//   //crate char map of stringB
//   const stringBObj = {};
//   stringB.split("").forEach(charB => {
//     if (!stringBObj[charB]) {
//       stringBObj[charB] = 1;
//     }
//     else {
//       stringBObj[charB]++;
//     }
//   });

//   //loop through stringAobj and check if each char exists in stringBobj as well
//   let result = true;
//   for (let charA in stringAObj) {
//     if (!stringBObj[charA]) {
//       result = false;
//     }
//   }
//   return result;

// }

// //method 2
// function anagrams(stringA, stringB) {

//   //remove space and ! from both string and change to lowercase
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   //if two strings length is not the same, it is not anagram for sure
//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   //create char map of stringA
//   const stringAObj = createCharMap(stringA);

//   //create char map of stringB
//   const stringBObj = createCharMap(stringB);

//   //loop through stringAobj and check if each char exists in stringBobj as well
//   for (let charA in stringAObj) {
//     if (stringAObj[charA] !== stringBObj[charA]) {
//       return false;
//     }
//   }
//   return true;

// }
// //helper function to create char map multiple times
// const createCharMap = (str) => {
//   const charMap = {};
//   str.split("").forEach(char => {
//     charMap[char] = charMap[char] + 1 || 1;
//   });
//   return charMap;
// };


//method 3
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join();
};


module.exports = anagrams;
