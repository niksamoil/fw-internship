/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const arr = [[1], [2, 2, 2], [3, 3], [4, 4, 4, 4, 4]];

function max() {
  const a = arr[Math.floor(Math.random() * arr.length)];

  const maxArr = arr[0].length;
  if (maxArr < a.length) {
    console.log(a);
    return a;
  }
}

max();

//-----------------------------------------------------------
const arrOfBilboards = [
  {
    id: 1,
    w: 10
  },
  {
    id: 2,
    w: 20
  },
  {
    id: 3,
    w: 30
  }
];
// let wb = 0;
// let rangeCounter = 0;
// for (let i = 0; i < arrOfBilboards.length; i++) {
//     wb += arrOfBilboards[i].w;
//     arrOfBilboards[i].range = [rangeCounter, rangeCounter + arrOfBilboards[i].w];
//     rangeCounter += arrOfBilboards[i].w;
// }
// const weightRandom = Math.random() * wb;
// const id = arrOfBilboards.filter(el => {
//     const start = el.range[0];
//     const end = el.range[1];
//     if (weightRandom >= start && weightRandom <= end) {
//         return el;
//     }
// });
// // console.log(id);
function getRandom(array) {
  let counter = 0;
  const ranges = array.map((el) => {
    const result = {
      id: el.id,
      range: {
        start: counter,
        end: counter + el.w
      }
    };
    counter += el.w;
    return result;
  });
  const random = Math.random() * counter;
  return ranges.filter((elem) => {
    if (random >= elem.range.start && random <= elem.range.end) {
      return elem;
    }
  });
}
const result = [];
for (let i = 0; i < 1000000; i++) {
  const random = getRandom(arrOfBilboards)[0];
  const finded = result.find((el) => el.id === random.id);
  if (finded) {
    finded.counter++;
    continue;
  }
  result.push({
    id: random.id,
    counter: 1
  });
}
console.log(result);
