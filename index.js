// reversing the string 
function reverseString(word) {
  return word.split("").reverse().join("");
}
// checking whether the string which is reversed is same as the original string or not
function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord = reverseString(word);
  if (word === reversedWord) return true
  
  return false
}  

  isPalindrome('abba');
  isPalindrome('racecar');
  isPalindrome ('a');
  isPalindrome('robot');
  isPalindrome('ab');
  isPalindrome ('mom');

/* 
  Add your pseudocode here

  if the string is === to the reversed one then it will 
  return true 
  else 
  return false
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));


}

module.exports = isPalindrome;
