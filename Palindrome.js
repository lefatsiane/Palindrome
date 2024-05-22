// const moviesArray = [
//   "Star Wars",
//   "Avatar",
//   "Harry Potter",
//   "Lord of the Rings ",
// ];
// let movieIndex = moviesArray.indexOf("Avatar");
// console.log(movieIndex); // Output: 1
// let string = "The quick brown fox jumps over the lazy dog.";
// let wordIndex = string.indexOf("fox");
// console.log(wordIndex); // Output: 16

let word = prompt("Enter a word:"); // Prompts the user to enter a word

let Palindrome = true; // Initialize a variable to store the result

let first = 0; //this is the first letter of the word
let last = word.length - 1; //this is the last letter of the word

while (first < last && Palindrome) {
  // Loop from first and last positions until the middle of the word is reached or a mismatch is found

  if (word[first] !== word[last]) {
    // Compare the letters at the first and last position

    Palindrome = false; // If they are different, set the result to false and break the loop
    break; // this breaks the loop
  }

  first++; // begins from first character to the middle to determine if word is a palindrome
  last--; // begins from last character to the middle to determine if word is a palindrome
}

if (Palindrome) {
  console.log(`${word} is a palindrome`); // Display the word is a palindrome
} else {
  console.log(` ${word} is not a palindrome`); // Display the word if its not a pallindrome
}
