'use strict';

const reverseString = (str) => {
  if (str.length === 0) {
    return '';
  }

  return str[str.length - 1] + reverseString(str.slice(0,-1));
};

// const reverseString = (str) => {
//   return str.split('').reverse().join('');
// };

console.log(reverseString('hello'));
