/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
// Write a function to check whether input is an array or not without using isArray
function arrayCheck(input) {
  return input instanceof Array ? 'is Array' : 'is not an Array';
}

console.group('Check whether input is an array or not');
console.log(arrayCheck([1, 2]));
console.log(arrayCheck(2));
console.log(arrayCheck('a'));
console.groupEnd();

// -------------------------------------------------
// Clone an array without using JSON.stringify()

const a = [1, 2, 3, ['a', 'c'], { a: 0, b: 5 }];

// v1
// const b = [...a];  // is not deep clone

// v2
// const c = b.concat(a); // is not deep clone

// v3
function cloneObject(obj) {
  const clone = {};
  for (const i in obj) {
    if (obj[i] != null && typeof obj[i] == 'object') clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}

function arrCopy(arr) {
  const arrOfPrimitives = [];
  const arrOfArrays = [];
  let arrOfOjb = [];
  let final = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object' && !(arr[i] instanceof Array)) {
      arrOfPrimitives.push(arr[i]);
    } else if (arr[i] instanceof Array) {
      for (let k = 0; k < arr[i].length; k++) {
        arrOfArrays.push(arr[i][k]);
      }
    } else {
      arrOfOjb = cloneObject(arr[i]);
    }
  }
  final = [...arrOfPrimitives, arrOfArrays, arrOfOjb];
  return final;
}

const newArr = arrCopy(a);
newArr[4].a = 'zce';
newArr[3][0] = false;

console.group('Array copy');
console.log('original array');
console.log(a);
console.log('cloned array with changes');
console.log(newArr);
console.groupEnd();

// Create a function that will create an array made of length elements; fill elements with their indexes
function fillArray(num) {
  const filledArray = [];

  for (let i = 1; i <= num; i++) {
    filledArray.push(i);
  }
  return filledArray;
}

console.group(
  'Create a function that will create an array made of length elements; fill elements with their indexes'
);
console.log(fillArray(10));
console.groupEnd();

// ------------------------------------------------------------------
// Create a function that will return last even element of the array
function getLastEven(arr) {
  let finalNum = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      finalNum = arr.lastIndexOf(arr[i]);
    }
  }
  return arr[finalNum];
}

console.group('Create a function that will return last even element of the array');
console.log(getLastEven([1, 3, 4, 5, 5, 6, 7, 8, 7, 9, 10, 11]));
console.groupEnd();

// --------------------------------------------------------------------
// Write a function that will flatten an array without using flat()
const fl = [0, 1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
function flatten(arr) {
  const flattend = [];
  (function flat(array) {
    array.forEach((el) => {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  }(arr));
  return flattend;
}
// v2
// function flatten(input) {
//   const stack = [...input];
//   console.log(stack);
//   const res = [];
//   while (stack.length) {
//     const next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       res.push(next);
//     }
//   }
//   return res.reverse();
// }
// flatten(fl);

console.group('Flatten array');
console.log(flatten(fl));
console.groupEnd();

// Write a function to shuffle an array

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.group('Shuffle array');
console.log(shuffleArray([1, 3, 4, 5, 5, 6, 7, 8, 7, 9, 10, 11]));
console.groupEnd();
