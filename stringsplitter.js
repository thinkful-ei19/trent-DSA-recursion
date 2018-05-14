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

console.log(split('hello my name is trent', ''));
// const str = 'hello my name is trent';
// const splitter = ' ';
// console.log(str.slice(str.indexOf(splitter) + 1));
// console.log('hello my name is trent'.split(''));