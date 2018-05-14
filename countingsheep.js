'use strict';

const countingSheep = (sheep) => {
  if (sheep === 0) {
    return;
  }
  
  console.log(`${sheep} - Another sheep jump over the fence`);
  return countingSheep(sheep - 1);

};

countingSheep(5);