// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

 //solution 3
 function reverse(str) {
   return str.split('').reduce((rev,char) => char+rev, '');
}
//solution 1
//function reverse(str) {
    //return str.split('').reverse().join('');
//}

// solution 2
// function reverse(str) {
//     let reversed = '';
//     for(let character in str){
//       reversed=character+reversed;
//     }
//     return reversed;
//   }
module.exports = reverse;
