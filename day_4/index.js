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
function add(...args) {
  return args.reduce((acc, cur) => {
    return `${acc} ${cur}`;
  });
}

console.group('returns a story generated with the help of these arguments and other custom text.');
console.log('ordinary function:', add('a', 'b', 'c', 'ecajcl', 'cejaocajo'));
console.log('arrow function:', storyGegerator('a', 'b', 'c', 'ecajcl', 'cejaocajo'));
console.groupEnd();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Extend the default values functionality (for function parameters) to set to default not only the undefined values but also the null values (but not other falsy values)

// function extendFunc() {

// }

// console.log(extendFunc());
