'use strict';

const triangularNumber = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + triangularNumber(num - 1);
};

// const triangularNumber = (num) => {
//   let result = 0;
//   for (let i = num; i > 0; i--) {
//     result += i;
//   }
//   return result;
// };

console.log(triangularNumber(4));