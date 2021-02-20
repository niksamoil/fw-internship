/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
/* eslint-disable no-console */
// boolean, try with null
function isAObject(value) {
  if (
    value !== null
    && typeof value === 'object'
    && Object.getPrototypeOf(value).isPrototypeOf(Object)
  ) {
    return true;
  }
  return false;
}

console.group('Is an object?');
console.log(isAObject({ name: 'vasea' }));
console.log(isAObject(new Object()));
console.log(isAObject(undefined));
console.log(isAObject(null));
console.log(isAObject(1));
console.log(isAObject('a'));
console.log(isAObject(false));
console.log(isAObject([]));
console.log(isAObject(new Array()));
console.log(isAObject(() => {}));
console.log(isAObject(() => {}));
console.groupEnd();

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// return object A without keys existing in object B

const a = {
  name: 'john',
  age: 20,
  born: 1998,
  hobby: 'fotball'
};
const b = {
  name: 'john',
  age: 20,
  born: 1998,
  hobby: 'fotball',
  hair: 'blond'
};

function aWithouB(objA, objB) {
  const keysFromFirstObj = Object.keys(objA);
  const keysFromSecondObj = Object.keys(objB);
  let maxLenght = '';
  const commonObj = {};

  if (keysFromFirstObj.length > keysFromSecondObj.length) {
    maxLenght = keysFromFirstObj.length;
  } else {
    maxLenght = keysFromSecondObj.length;
  }

  for (let i = 0; i < maxLenght; i++) {
    if (
      keysFromFirstObj[i] !== keysFromSecondObj[i]
      && keysFromFirstObj.length > keysFromSecondObj.length
    ) {
      commonObj[keysFromFirstObj[i]] = objA[keysFromFirstObj[i]];
    }
    if (
      keysFromFirstObj[i] !== keysFromSecondObj[i]
      && keysFromFirstObj.length < keysFromSecondObj.length
    ) {
      commonObj[keysFromSecondObj[i]] = objB[keysFromSecondObj[i]];
    }
  }

  return commonObj;
}

console.group('Object A without keys existing in object B, or B whithout keys existing in A');
console.log(aWithouB(a, b));
console.groupEnd();
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// make sure works when nonObject used.
const empthyObj = {};

function isEmptyObject(obj) {
  const keysFromObj = Object.keys(obj);

  if (keysFromObj.length < 1 && typeof obj === 'object') {
    return true;
  }

  return false;
}

console.group('Is object empthy?');
console.log('const empthyObj = {}: ', isEmptyObject(empthyObj));
console.log('number 5: ', isEmptyObject(5));
console.log('boolean: ', isEmptyObject(true));
console.groupEnd();

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// boolean, if objA have same values as objA
const c = { name: 'vasea' };
const d = { name: 'vasea' };
const e = { name: 'vasea', age: 20 };

function isEqual(objA, objB) {
  const arrOfObjA = Object.entries(objA);
  const arrOfObjB = Object.entries(objB);

  if (arrOfObjA.length === arrOfObjB.length) {
    for (let i = 0; i < arrOfObjA.length; i++) {
      for (let k = 0; k < arrOfObjA[i].length; k++) {
        if (arrOfObjA[i][k] === arrOfObjB[i][k] && arrOfObjA[i][k + 1] === arrOfObjB[i][k + 1]) {
          return true;
        }
      }
    }
  }
  return false;
}

console.group('Are objects equal?');
console.log('C', c, 'D', d, isEqual(c, d));
console.log('C', c, 'E', e, isEqual(c, e));
console.groupEnd();

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// object, return common keys between objA and objB
function intersections(objA, objB) {
  const keysFromFirstObj = Object.keys(objA);
  const keysFromSecondObj = Object.keys(objB);
  let maxLenght = '';
  const commonObj = {};

  if (keysFromFirstObj.length > keysFromSecondObj.length) {
    maxLenght = keysFromFirstObj.length;
  } else {
    maxLenght = keysFromSecondObj.length;
  }

  for (let i = 0; i < maxLenght; i++) {
    if (
      keysFromFirstObj[i] == keysFromSecondObj[i]
      && keysFromFirstObj.length > keysFromSecondObj.length
    ) {
      commonObj[keysFromFirstObj[i]] = objA[keysFromFirstObj[i]];
    }
    if (
      keysFromFirstObj[i] == keysFromSecondObj[i]
      && keysFromFirstObj.length < keysFromSecondObj.length
    ) {
      commonObj[keysFromSecondObj[i]] = objB[keysFromSecondObj[i]];
    }
  }

  return commonObj;
}

console.group('Common keys between objA and objB');
console.log('A', a);
console.log('B', b);
console.log('common', intersections(a, b));
console.groupEnd();

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// any, obj by the path from the given obj
const f = {
  name: 'tommas',
  details: {
    age: 29,
    height: 190,
    parents: {
      mother: 'Olea',
      father: 'Mihail'
    }
  }
};

function getValueByPath(obj, path) {
  const objPath = path.split('.');
  let result = obj;

  for (let i = 0; i < objPath.length; i++) {
    result = result[objPath[i]];
  }
  return result;
}

console.group('Get value by path');
console.log(getValueByPath(f, 'details.parents.mother'));
console.groupEnd();
