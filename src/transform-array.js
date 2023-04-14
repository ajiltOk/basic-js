const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr) === true) {
    let newArr2 = [];
    let newArr = newArr2.concat(arr);
    newArr.forEach(element => {
      if(element === '--double-next') {
        let ind = newArr.indexOf('--double-next');
        if(ind < newArr.length - 1) {
          newArr[ind] = newArr[ind + 1];
        } else if(ind === newArr.length - 1) {
          newArr.splice(ind, 1);
        }
      } else if(element === '--discard-prev') {
        let ind = newArr.indexOf('--discard-prev');
        if(ind != 0) {
          newArr.splice((ind - 1), 2);
        } else if(ind === 0) {
          newArr.splice(ind, 1);
        }
      } else if(element === '--discard-next') {
        let ind = newArr.indexOf('--discard-next');
        if(newArr[ind + 2] === '--double-prev' || newArr[ind + 2] === '--discard-prev') {
          newArr.splice(ind, 3);
        } else {
          if(ind < newArr.length - 1) {
            newArr.splice((ind + 1), 2);
          } else if(ind === newArr.length - 1) {
            newArr.splice(ind, 1);
          }
        }
      } else if(element === '--double-prev') {
        let ind = newArr.indexOf('--double-prev');
        if(ind != 0) {
          newArr[ind] = newArr[ind - 1];
        } else if(ind === 0) {
          newArr.splice(ind, 1);
        }
      }
    })
    return newArr;
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

}

module.exports = {
  transform
};
