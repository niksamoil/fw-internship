/* eslint-disable max-len */
/* eslint-disable no-console */
// ----------------------------------------------------------------
// Transformati un număr X întreg în echivalentul scris cu numerale romane.
//  convert from 1 to 10
function convertFromOneToTen(x) {
  let res = '';
  if (x >= 0 && x <= 3) {
    for (let i = 0; i < x; i++) {
      res += 'I';
    }
    return res;
  } if (x === 4) {
    res += 'IV';
  } if (x >= 5 && x <= 8) {
    res = 'V';
    for (let i = 0; i < x - 5; i++) {
      res += 'I';
    }
    return res;
  } if (x === 9) {
    res += 'IX';
  }
  return res;
}
//  convert from 10 to 100
function convertFromTenToOneHundred(x) {
  const firstNum = x.toString().charAt(0);
  const secondNum = x.toString().charAt(1);
  let res = '';
  let resNumTwo = '';
  let finalNum = '';
  if (x >= 10 && x < 40) {
    for (let i = 0; i < +firstNum; i++) {
      res += 'X';
    }
    if (+secondNum !== 0) {
      for (let i = 0; i < +secondNum; i++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }
    finalNum = res + resNumTwo;
  }
  if (x >= 40 && x < 50) {
    if (+secondNum !== 0) {
      for (let i = 0; i < +secondNum; i++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }
    finalNum = `XL${convertFromOneToTen(+secondNum)}`;
  }
  if (x >= 50 && x < 90) {
    res = 'L';
    for (let i = 0; i < Math.floor((x - 50) / 10); i++) {
      res += 'X';
    }
    if (+secondNum !== 0) {
      for (let i = 0; i < +secondNum; i++) {
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
      for (let i = 0; i < +secondNum; i++) {
        resNumTwo = convertFromOneToTen(+secondNum);
      }
    } else {
      resNumTwo = '';
    }
    finalNum = res + resNumTwo;
  }
  return finalNum;
}
// convert from 100 to 1000
function convertFromOhToOt(x) {
  const firstNum = x.toString().charAt(0);
  const secondNum = x.toString().charAt(1);
  const thirdNum = x.toString().charAt(2);
  const secondPartOfNum = x.toString().slice(1);
  let res = '';
  let resNumTwo = '';
  let finalNum = '';
  if (x >= 100 && x < 400) {
    for (let i = 0; i < +firstNum; i++) {
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
    for (let i = 0; i < Math.floor((x - 500) / 100); i++) {
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
}
// final function
function convertToRomanNumber(x) {
  let finalNum = '';
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
console.groupEnd();

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Gasiti cel mai mare nr dintr-un masiv M de numere
const arr = [0, 4, -3, 30, 54, 3, 20, 100];

function findMax(arrayOfNumbers) {
  let maxNum = arrayOfNumbers[0];
  // v1 --------------
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maxNum) {
      maxNum = arrayOfNumbers[i];
    }
  }
  // v2 ----------------
  arrayOfNumbers.forEach(item => {
    if (item > maxNum) {
      maxNum = item;
    }
  });
  // console.log(maxNum);
  // v3 ---------------------
  return Math.max.apply(null, arrayOfNumbers);
}
console.group('Gasiti cel mai mare nr dintr-un masiv M de numere');
console.log(`Max value from [${arr}] is`, findMax(arr));
console.groupEnd();
// --------------------------------------------------------------
// --------------------------------------------------------------
// Gasiti cel mai mic nr dintr-un masiv M de numere
function findMin(arrayOfNumbers) {
  let minNum = arrayOfNumbers[0];
  arrayOfNumbers.forEach(item => {
    if (item < minNum) {
      minNum = item;
    }
  });
  return minNum;
}
console.group('Gasiti cel mai mic nr dintr-un masiv M de numere');
console.log(`Min value from [${arr}] is`, findMin(arr));
console.groupEnd();
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.
// 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21
function displayDate(day, month, year) {
  let finalDate = `${day}.${month}.${year}`;

  if (day < 10 && month < 10) {
    finalDate = `0${day}.0${month}.${year}`;
  }
  if (day > 10 && month < 10) {
    finalDate = `${day}.0${month}.${year}`;
  }
  if (day < 10 && month > 10) {
    finalDate = `0${day}.${month}.${year}`;
  }

  return finalDate;
}
console.group('Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.');
console.log(displayDate(8, 2, 1993));
console.log(displayDate(2, 20, 1900));
console.log(displayDate(14, 4, 1900));
console.log(displayDate(14, 12, 1900));
console.groupEnd();

// --------------------------------------------------------
// --------------------------------------------------------
// Verificați dacă parametrul transmis către funcție este un număr întreg.
function isInteger(x) {
  const num = x.toString().includes('.');
  return !num;
}

console.group('Verificați dacă parametrul transmis către funcție este un număr întreg.');
console.log('7.3 is integer?: ', isInteger(7.3));
console.log('7 is integer?: ', isInteger(7));
console.groupEnd();
// ------------------------------------------------------------
// ------------------------------------------------------------
// Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).
function isFloat(x) {
  const num = x.toString().includes('.');
  return num;
}

console.group('Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).');
console.log('8.3 is float?: ', isFloat(8.3));
console.log('8 is float?: ', isFloat(8));
console.groupEnd();
// ------------------------------------------------------------
// ------------------------------------------------------------
// Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).
function isPalindrom(string) {
  const arrOfString = string.split('');
  const arrOfStringCopy = Array.from(arrOfString);
  const reversedArr = arrOfStringCopy.reverse();
  const reversedStr = reversedArr.join('');

  if (string === reversedStr) {
    return true;
  }

  return false;
}

console.group('Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).');
console.log('String "bababab" is palindrom? ', isPalindrom('bababab'));
console.log('String "ana" is palindrom? ', isPalindrom('ana'));
console.log('String "banana" is palindrom? ', isPalindrom('banana'));
console.log('String "bomba" is palindrom? ', isPalindrom('bomba'));
console.groupEnd();
