// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// //method 1
// function chunk(array, size) {
//   //create outer array container
//   let outerArr = [];

//   //create inner array container for split element by size provided
//   let innerArr = [];

//   array.forEach(val => {
//     //add item to inner container
//     innerArr.push(val);

//     // check if cotainer size is eqal to than provided size
//     if (innerArr.length === size) {
//       //add inner container to outer container
//       outerArr.push(innerArr);
//       //reset the inner container
//       innerArr = [];
//     }
//   });

//   //if last inner container was less than the size limit, add it directly to outer container here
//   if (innerArr.length > 0) {
//     outerArr.push(innerArr);
//   }

//   return outerArr;
// }



// //method 2
// function chunk(array, size) {

//   //create empty array to hold inner arrays
//   let outerArr = [];
//   //for each element in outer array
//   array.forEach(eleement => {
//     //retrieve last element from outer array
//     const lastInnerElement = outerArr[outerArr.length - 1];

//     //if no last inner element (first time) or last inner element size is full
//     if (!lastInnerElement || lastInnerElement.length === size) {
//       //create new inner element and push it to outer array
//       outerArr.push([eleement]);
//     }
//     else {
//       //push current array to last inner element
//       lastInnerElement.push(eleement);
//     }
//   });

//   return outerArr;
// }


//method 3
function chunk(array, size) {

  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
