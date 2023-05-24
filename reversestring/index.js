// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // turn string into array
  const resArray = str.split("");

  // reverse the array
  resArray.reverse();

  // return the joined string
  return resArray.join("");
}

module.exports = reverse;
