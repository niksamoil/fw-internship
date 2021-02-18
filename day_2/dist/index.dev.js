"use strict";

/* eslint-disable max-len */

/* eslint-disable no-console */
// ----------------------------------------------------------------
// Transformati un număr X întreg în echivalentul scris cu numerale romane.
//  convert from 1 to 10
function convertFromOneToTen(x) {
  var res = '';

  if (x >= 0 && x <= 3) {
    for (var i = 0; i < x; i++) {
      res += 'I';
    }

    return res;
  }

  if (x === 4) {
    res += 'IV';
  }

  if (x >= 5 && x <= 8) {
    res = 'V';

    for (var _i = 0; _i < x - 5; _i++) {
      res += 'I';
    }

    return res;
  }

  if (x === 9) {
    res += 'IX';
  }

  return res;
} //  convert from 10 to 100


function convertFromTenToOneHundred(x) {
  var firstNum = x.toString().charAt(0);
  var secondNum = x.toString().charAt(1);
  var res = '';
  var resNumTwo = '';
  var finalNum = '';

  if (x >= 10 && x < 40) {
    for (var i = 0; i < +firstNum; i++) {
      res += 'X';
    }

    if (+secondNum !== 0) {
      for (var _i2 = 0; _i2 < +secondNum; _i2++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }

    finalNum = res + resNumTwo;
  }

  if (x >= 40 && x < 50) {
    if (+secondNum !== 0) {
      for (var _i3 = 0; _i3 < +secondNum; _i3++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }

    finalNum = "XL".concat(convertFromOneToTen(+secondNum));
  }

  if (x >= 50 && x < 90) {
    res = 'L';

    for (var _i4 = 0; _i4 < Math.floor((x - 50) / 10); _i4++) {
      res += 'X';
    }

    if (+secondNum !== 0) {
      for (var _i5 = 0; _i5 < +secondNum; _i5++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }

    finalNum = res + resNumTwo;
  }

  if (x >= 90 && x < 100) {
    res = 'XC';

    if (+secondNum !== 0) {
      for (var _i6 = 0; _i6 < +secondNum; _i6++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }

    finalNum = res + resNumTwo;
  }

  return finalNum;
} // convert from 100 to 1000


function convertFromOhToOt(x) {
  var firstNum = x.toString().charAt(0);
  var secondNum = x.toString().charAt(1);
  var thirdNum = x.toString().charAt(2);
  var secondPartOfNum = x.toString().slice(1);
  var res = '';
  var resNumTwo = '';
  var finalNum = '';

  if (x >= 100 && x < 400) {
    for (var i = 0; i < +firstNum; i++) {
      res += 'C';
    }

    if (+secondNum === 0) {
      resNumTwo = convertFromOneToTen(+thirdNum);
    } else {
      resNumTwo = convertFromTenToOneHundred(+secondPartOfNum);
    }

    finalNum = res + resNumTwo;
  }

  if (x >= 400 && x < 500) {
    res = 'CD';

    if (+secondNum === 0) {
      resNumTwo = convertFromOneToTen(+thirdNum);
    } else {
      resNumTwo = convertFromTenToOneHundred(+secondPartOfNum);
    }

    finalNum = res + resNumTwo;
  }

  if (x >= 500 && x < 900) {
    res = 'D';

    for (var _i7 = 0; _i7 < Math.floor((x - 500) / 100); _i7++) {
      res += 'C';
    }

    if (+secondNum === 0) {
      resNumTwo = convertFromOneToTen(+thirdNum);
    } else {
      resNumTwo = convertFromTenToOneHundred(+secondPartOfNum);
    }

    finalNum = res + resNumTwo;
  }

  if (x >= 900 && x < 1000) {
    res = 'CM';

    if (+secondNum === 0) {
      resNumTwo = convertFromOneToTen(+thirdNum);
    } else {
      resNumTwo = convertFromTenToOneHundred(+secondPartOfNum);
    }

    finalNum = res + resNumTwo;
  }

  return finalNum;
} // final function


function convertToRomanNumber(x) {
  var finalNum = '';

  if (x < 10) {
    finalNum = convertFromOneToTen(x);
  }

  if (x >= 10 && x < 100) {
    finalNum = convertFromTenToOneHundred(x);
  }

  if (x >= 100 && x < 1000) {
    finalNum = convertFromOhToOt(x);
  }

  return finalNum;
}

console.group('Transformati un număr X întreg în echivalentul scris cu numerale romane.');
console.log(convertToRomanNumber(333));
console.log(convertToRomanNumber(987));
console.log(convertToRomanNumber(9));
console.log(convertToRomanNumber(97));
console.log(convertToRomanNumber(102));
console.log(convertToRomanNumber(350));
console.groupEnd(); // ----------------------------------------------------------------
// ----------------------------------------------------------------
// Gasiti cel mai mare nr dintr-un masiv M de numere

var arr = [0, 4, -3, 30, 54, 3, 20, 100];

function findMax(arrayOfNumbers) {
  var maxNum = arrayOfNumbers[0]; // v1 --------------

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maxNum) {
      maxNum = arrayOfNumbers[i];
    }
  } // v2 ----------------


  arrayOfNumbers.forEach(function (item) {
    if (item > maxNum) {
      maxNum = item;
    }
  }); // console.log(maxNum);
  // v3 ---------------------

  return Math.max.apply(null, arrayOfNumbers);
}

console.group('Gasiti cel mai mare nr dintr-un masiv M de numere');
console.log("Max value from [".concat(arr, "] is"), findMax(arr));
console.groupEnd(); // --------------------------------------------------------------
// --------------------------------------------------------------
// Gasiti cel mai mic nr dintr-un masiv M de numere

function findMin(arrayOfNumbers) {
  var minNum = arrayOfNumbers[0];
  arrayOfNumbers.forEach(function (item) {
    if (item < minNum) {
      minNum = item;
    }
  });
  return minNum;
}

console.group('Gasiti cel mai mic nr dintr-un masiv M de numere');
console.log("Min value from [".concat(arr, "] is"), findMin(arr));
console.groupEnd(); // ---------------------------------------------------------------
// ---------------------------------------------------------------
// Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.
// 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21

function displayDate(day, month, year) {
  var finalDate = "".concat(day, ".").concat(month, ".").concat(year);

  if (day < 10 && month < 10) {
    finalDate = "0".concat(day, ".0").concat(month, ".").concat(year);
  }

  if (day > 10 && month < 10) {
    finalDate = "".concat(day, ".0").concat(month, ".").concat(year);
  }

  if (day < 10 && month > 10) {
    finalDate = "0".concat(day, ".").concat(month, ".").concat(year);
  }

  return finalDate;
}

console.group('Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.');
console.log(displayDate(8, 2, 1993));
console.log(displayDate(2, 20, 1900));
console.log(displayDate(14, 4, 1900));
console.log(displayDate(14, 12, 1900));
console.groupEnd(); // --------------------------------------------------------
// --------------------------------------------------------
// Verificați dacă parametrul transmis către funcție este un număr întreg.

function isInteger(x) {
  var num = x.toString().includes('.');
  return !num;
}

console.group('Verificați dacă parametrul transmis către funcție este un număr întreg.');
console.log('7.3 is integer?: ', isInteger(7.3));
console.log('7 is integer?: ', isInteger(7));
console.groupEnd(); // ------------------------------------------------------------
// ------------------------------------------------------------
// Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).

function isFloat(x) {
  var num = x.toString().includes('.');
  return num;
}

console.group('Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).');
console.log('8.3 is float?: ', isFloat(8.3));
console.log('8 is float?: ', isFloat(8));
console.groupEnd(); // ------------------------------------------------------------
// ------------------------------------------------------------
// Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).

function isPalindrom(string) {
  var arrOfString = string.split('');
  var arrOfStringCopy = Array.from(arrOfString);
  var reversedArr = arrOfStringCopy.reverse();
  var reversedStr = reversedArr.join(''); // if (string === reversedStr) {
  //   return true;
  // }

  return string === reversedStr ? true : false; // return false;
}

console.group('Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).');
console.log('String "bababab" is palindrom? ', isPalindrom('bababab'));
console.log('String "ana" is palindrom? ', isPalindrom('ana'));
console.log('String "banana" is palindrom? ', isPalindrom('banana'));
console.log('String "bomba" is palindrom? ', isPalindrom('bomba'));
console.groupEnd();