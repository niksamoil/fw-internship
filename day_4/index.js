/* eslint-disable max-len */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-caller */
/* eslint-disable no-console */

// Write a JavaScript function that returns the function name.

function showName() {
  return arguments.callee.name;
}

console.group('function name');
console.log(showName());
console.groupEnd();

// ---------------------------------------------------------
// ---------------------------------------------------------
// Write a function that receives a random nr of string arguments and returns a story generated with the help of these arguments and other custom text.

// arrow function
const storyGegerator = (...args) => args.reduce((acc, cur) => `${acc} ${cur}`);

// simple function
// eslint-disable-next-line no-unused-vars
function add(...args) {
  return args.reduce((acc, cur) => {
    return `${acc} ${cur}`;
  }, '');
}

console.group('returns a story generated with the help of these arguments and other custom text.');
// console.log('ordinary function:', add('a', 'b', 'c', 'ecajcl', 'cejaocajo'));
console.log('arrow function:', storyGegerator('a', 'b', 'c', 'ecajcl', 'cejaocajo'));
console.groupEnd();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Extend the default values functionality (for function parameters) to set to default not only the undefined values but also the null values (but not other falsy values)

// const N = f => (...a) => f(...a.map(v => (v === null ? undefined : v)));

function extendFuncParams(m) {
  return (...a) => {
    return m(
      ...a.map((v) => {
        return v === null ? undefined : v;
      })
    );
  };
}

const fx = extendFuncParams((x = 'default value') => console.log(x));

console.group('Extend the default values functionality');
fx(null);
console.groupEnd();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Write a function that behaves differently depending on the nr of arguments being passed

function showColor(...args) {
  let zeroCount = '';
  let interimRes = '';
  if (args.length > 6) {
    return 'is not a color';
  }

  for (let i = 0; i < 6 - args.length; i++) {
    zeroCount += '0';
  }

  args.reduce((acc, currentValue) => {
    interimRes = (acc + currentValue).toString();
    return interimRes;
  }, '#');
  return interimRes + zeroCount;
}

console.group(
  'Write a function that behaves differently depending on the nr of arguments being passed'
);
console.log(showColor('a', 3, 'b', 4, 5, 'c'));
console.groupEnd();
