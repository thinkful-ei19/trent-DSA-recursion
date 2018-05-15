'use strict';

const countingSheep = (sheep) => {
  if (sheep === 0) {
    return;
  }
  
  console.log(`${sheep} - Another sheep jump over the fence`);
  return countingSheep(sheep - 1);

};

// const countingSheep = (sheep) => {
//   for (let i = sheep; i > 0; i--) {
//     console.log(`${i} - Another sheep jump over the fence`);
//   }
// };

countingSheep(5);