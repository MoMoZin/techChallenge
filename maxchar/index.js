// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// similar questions
// What is the most common characher in the string?
// Does String A have the same characters as String B (is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str) {
  let charObj = {};
  str.split("").forEach(char => {
    // if (!charObj[char]) {
    //   charObj[char] = 1;
    // }
    // else {
    //   charObj[char] += 1;
    // }
    // charObj[char] = !charObj[char] ? 1 : +1;
    charObj[char] = charObj[char] + 1 || 1;
  });
  let maxCount = 0;
  let result = "";
  for (let curr in charObj) {
    if (charObj[curr] > maxCount) {
      maxCount = charObj[curr];
      result = curr;
    }
  }
  return result;
}

module.exports = maxChar;
