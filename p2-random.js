/*
    CIT 281 Project 2
    Name: Olivia Butler 
*/

// function that returns a random single lower case letter.
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//returns a random length string.
function getRandomString(minLength, maxLength) {
  let result = "";

  let lengthOfOutputString = getRandomInteger(10, 20);

  for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
  }
  return result;
}

console.log(getRandomString());

//Takes an array and rejoins it into a string, sorted alphabetically.
function getSortedString(string) {
  return string.split("").sort().join("");
}
console.log(getSortedString(getRandomString(10, 20)));
