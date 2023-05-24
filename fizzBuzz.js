// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and
// for tthe multiples of five print "Buzz".
// for numbers which are multiples of both three and five, print "FizzBuzz"


const printFizBuzz = () => {
  for (i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) {
      result += "Fizz";
    }
    if (i % 5 === 0) {
      result += "Buzz";
    }
    result.length > 0 ? console.log("result: ", result) : console.log("number: ", i);
  }
};

printFizBuzz();