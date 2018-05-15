'use strict';

const split = (str, splitter) => {
  if (!splitter) {
    return [...str];
  }
  if (str.indexOf(splitter) === -1) {
    return [str];
  }
  return [str.slice(0, str.indexOf(splitter)), ...split(str.slice(str.indexOf(splitter) + 1), splitter)];
};

// const split = (str, splitter) => {
//   if (!splitter) {
//     return [...str];
//   }
//   let array = [];
//   while (true) {
//     let index = str.indexOf(splitter);
//     if (index === -1) {
//       break;
//     }
//     array.push(str.slice(0, index));
//     str = str.slice(index + splitter.length);
//   }
//   array.push(str);
//   return array;
// };

console.log(split('hello my name is trent', ' '));
// console.log('hello my name is trent'.split(''));