// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //if two strings length is not the same, it is not anagram for sure
  if (stringA.length !== stringB.length) {
    return false;
  }

  //remove space and ! from both string and change to lowercase
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  //create char map of stringA
  const stringAObj = {};
  stringA.split("").forEach(charA => {
    if (!stringAObj[charA]) {
      stringAObj[charA] = 1;
    }
    else {
      stringAObj[charA]++;
    }
  });

  //crate char map of stringB
  const stringBObj = {};
  stringB.split("").forEach(charB => {
    if (!stringBObj[charB]) {
      stringBObj[charB] = 1;
    }
    else {
      stringBObj[charB]++;
    }
  });

  //loop through stringAobj and check if each char exists in stringBobj as well
  let result = true;
  for (let charA in stringAObj) {
    if (!stringBObj[charA]) {
      result = false;
    }
  }
  return result;

}

module.exports = anagrams;
