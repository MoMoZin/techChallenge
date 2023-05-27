// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //method 1
// function capitalize(str) {
//   const words = [];
//   str.split(" ").forEach(word => {
//     const firstWord = word[0].toUpperCase();
//     words.push(firstWord + word.slice(1));
//   });
//   return words.join(" ");
// }

//method 2
function capitalize(str) {
  let result = "";
  const strArr = str.split("");
  strArr.map((char, i) => {
    if (i === 0 || strArr[i - 1] === " ") {
      result += char.toUpperCase();
    }
    else {
      result += char;
    }
  });
  return result;
}

module.exports = capitalize;
