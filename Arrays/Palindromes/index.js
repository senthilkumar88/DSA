// --- Directions
// Given a string, return a new string with the palindromed
// order of characters
// --- Examples
//   palindrome('abba') === true equals to 'abba'
//   palindrome('apple') === false not equals to 'elppa'

 //solution 3
 function palindrome(str) {
   return str.split('').reduce((rev,char) => char+rev, '');
}
//solution 1
//function palindrome(str) {
    //return str.split('').palindrome().join('');
//}

// solution 2
// function palindrome(str) {
//     let palindromed = '';
//     for(let character in str){
//       palindromed=character+palindromed;
//     }
//     return palindromed;
//   }
module.exports = palindrome;
