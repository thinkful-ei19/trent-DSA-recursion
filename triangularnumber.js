'use strict';

const triangularNumber = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + triangularNumber(num - 1);
};

console.log(triangularNumber(5));