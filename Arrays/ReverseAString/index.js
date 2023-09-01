// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

 //solution 2
 function reverse(str) {
  let reversed = '';
  for(let i=0;i<str.length;i++){
    reversed=str[i]+reversed;
  }
  return reversed;
}
//solution 1
//function reverse(str) {
    //return str.split('').reverse().join('');
//}

module.exports = reverse;
