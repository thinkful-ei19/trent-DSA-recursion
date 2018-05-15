'use strict';

const arrayDouble = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const doubledNum = arr[0]*2;
  return [doubledNum, ...arrayDouble(arr.slice(1))];
};

// const arrayDouble = (arr) => {
//   return arr.map(item => item*2);
// };

console.log(arrayDouble([1,2,3]));