const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let arr = str.split('');
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    resultArr.push(Number(arr.join('')));
    arr = str.split('');
  }
  resultArr.sort((a, b) => a - b);
  return resultArr[resultArr.length - 1]
}

module.exports = {
  deleteDigit
};
