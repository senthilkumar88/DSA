// --- Directions
// Given a string, return a new string with the twoSumUptoKd
// order of characters
// --- Examples
//   twoSumUptoK('apple') === 'leppa'
//   twoSumUptoK('hello') === 'olleh'
//   twoSumUptoK('Greetings!') === '!sgniteerG'

 //solution 3
 function twoSumUptoK(str) {
   return str.split('').reduce((rev,char) => char+rev, '');
}
//solution 1
//function twoSumUptoK(str) {
    //return str.split('').twoSumUptoK().join('');
//}

// solution 2
// function twoSumUptoK(str) {
//     let twoSumUptoKd = '';
//     for(let character in str){
//       twoSumUptoKd=character+twoSumUptoKd;
//     }
//     return twoSumUptoKd;
//   }
module.exports = twoSumUptoK;
