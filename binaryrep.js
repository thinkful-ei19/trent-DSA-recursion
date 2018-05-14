'use strict';

const binaryRep = (num) => {
  if (num === 0) {
    return '';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  return binaryRep(dividedNum) + remainder.toString();
};

console.log(binaryRep(9));