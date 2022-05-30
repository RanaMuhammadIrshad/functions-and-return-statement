"use strict";

/* **1. Add Up.**
Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
* sumIntFrom1ToN(4) ➞ 10
* sumIntFrom1ToN(13) ➞ 91
* sumIntFrom1ToN(600) ➞ 180300 */

const sumIntFrom1ToN = function (int) {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }
  return sum;
};
let result = sumIntFrom1ToN(600);
console.log(result);

/* **2. Cubed.**
Create a function that takes in three numbers and returns the sum of its cubes. 
Examples:
* sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes(2) ➞ 8
* sumOfCubes() ➞ 0
*/
let sumOfCube = 0;
const sumOfCubes = function (num1 = 0, num2 = 0, num3 = 0) {
  return (sumOfCube = num1 ** 3 + num2 ** 3 + num3 ** 3);
};

let sum = sumOfCubes(1, 5, 9);
console.log(sum);

/* **3. String Check.**
Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.


Examples:
* isStrStartOfWord("bu", "button") ➞ true
* isStrStartOfWord("tri", "triplet") ➞ true
* isStrStartOfWord("beau", "pastry") ➞ false */

const isStrStartOfWord = function (str, word) {
  let myString = str.slice(0, str.length);
  
  let myWord = word.slice(0, str.length);
  if (myString === myWord) {
    return true;
  } else {
    return false;
  }
};

let result1 = isStrStartOfWord("bu", "button");
console.log(`No.3: ${result1}`);

/* **4. Less Than or Equal to Zero?**
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples:
* isLEQZero(3) ➞ false
* isLEQZero(0) ➞ true
* isLEQZero(-4) ➞ true
* isLEQZero(10) ➞ false */

const isLEQZero = function (number) {
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
};

let returnedVal = isLEQZero(-4);
console.log(returnedVal);

/* 
**5. Count Occurrences.**
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

Example:
* countOccurrences("this is a string", "i") ➞ 3 */

const countOccurrences = function (str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
};

const numOfOcc = countOccurrences("this is a string", "i");
console.log(numOfOcc);

/* **6. X To The Power of X.**
Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

Examples:
* calcBaseToExponent(5, 5) ➞ 3125
* calcBaseToExponent(10, 10) ➞ 10000000000
* calcBaseToExponent(3, 3) ➞ 27
 */

const calcBaseToExponent = function (base, expo) {
  let sum = 1;
  for (let i = 1; i <= expo; i++) {
    sum = base * sum;
  }
  return sum;
};

const baseToExp = calcBaseToExponent(5, 5);
console.log(baseToExp);

/* **7. Dog Years.**
Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

Example:
* dogAge(4) ➞ "Your doggo is 28 years old in dog years!" */

const dogAge = function (age) {
  return `Your doggo is ${age * 7} years old in dog years!`;
};

const ageOfDog = dogAge(4);
console.log(ageOfDog);

/* 
**8. A Lifetime Supply...**
You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function to help you calculate that amount for yourself. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. 
Examples:
* calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"*/

const calcLifetimeSupply = function (age, amount) {
  return `The snack company should provide you with ${Math.floor(
    (100 - age) * 365.254 * amount
  )} units, until you are a ripe old age of 100. Happy snacking!`;
};

const amountConsumed = calcLifetimeSupply(25, 2);
console.log(amountConsumed);

/* **Bonus:** 
1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). 
2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

    * calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!" */

const calcLifetimeSupply1 = function (age, amount, maxAge) {
  return `The snack company should provide you with ${Math.ceil(
    (maxAge - age) * 365.254 * amount
  )} units, until you are a ripe old age of 65. Happy snacking!`;
};

const amountConsumed1 = calcLifetimeSupply1(32, 0.58, 65);
console.log(amountConsumed1);

/* 
**9. Where's Waldo?**
Create a function that takes a string and returns true if Waldo is found, and false if he's not.

Examples:
* isWaldoHere("is there a wal here?") ➞ false
* isWaldoHere("I found you Waldo!") ➞ true
* isWaldoHere("Wait, don't you mean Wally?") ➞ false
* isWaldoHere("waldo is here") ➞ true */

const isWaldoHere = function (str) {
  let myStr = str.toLowerCase();
  if (myStr.includes("Waldo".toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const found = isWaldoHere("waldo is here");
console.log(found);

/* **10. Pie.**
Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

* Total number of slices.
* Number of recipients.
* How many slices each person gets.

Examples:
* isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices */

const isEqualSlices = function (slices, people, sliceEach) {
  if (people * sliceEach <= slices) {
    return true;
  } else {
    return false;
  }
};

const trueOrFalse = isEqualSlices(24, 12, 2);
console.log(trueOrFalse);

/* 
**11. XO**
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.

Examples:
* isEqualNumXandOs("ooxx") ➞ true
* isEqualNumXandOs("xooxx") ➞ false
* isEqualNumXandOs("ooxXm") ➞ true (case insensitive)
* isEqualNumXandOs("zpzpzpp") ➞ true (returns true if no x and o)
* isEqualNumXandOs("zzoo") ➞ false */

const isEqualNumXandOs = function (str) {
  let myStr = str.toLowerCase();
  let countO = 0;
  let countX = 0;
  for (let i = 0; i <= myStr.length; i++) {
    if (myStr[i] === "o") {
      countO++;
    }
  }

  for (let i = 0; i <= myStr.length; i++) {
    if (myStr[i] === "x") {
      countX++;
    }
  }

  if (countO === countX) {
    return true;
  } else {
    return false;
  }
};

const comOAndX = isEqualNumXandOs("ooxXm");
console.log(comOAndX);

/* **12. isPrime?**
Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
* isPrime(7) ➞ true
* isPrime(9) ➞ false
* isPrime(10) ➞ false */

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(13));

/* **13. Validate Email.**
Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

* The string must contain exactly one "@" character
* The string must contain at least one "." character
* The "." and the "@" must be in the appropriate places:
    * neither "." nor "@" can be the last character
    * "." can neither be directly before, nor directly after, "@"
    * there cannot be consecutive "." characters
    * "@" must have at least one character in front of it

Examples:
* "j@example.com" is valid while "@example.com" is invalid
* e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
* e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid */

const emailCheck = function (email) {
  let myEmail = email.toLowerCase();

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (myEmail.match(mailFormat)) {
    return true;
  } else {
    return false;
  }
};

const isEmailValid = emailCheck("john..smith@email.com");
console.log(`Email is Valid : ${isEmailValid}`);



