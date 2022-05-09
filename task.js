"use strict";

// const getUniqueNums = (arr) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// const input = [1, 1, 1, 2, 2, 7, 8];
// console.log(getUniqueNums(input));

// const getUniqueNums2 = (arr) => [...new Set(arr)];
// console.log(getUniqueNums2(input));

const arrayDiff = (arr1, arr2) => arr1.filter((item) => !arr2.includes(item));

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

const deleteNth = (arr, n) => {
  const res = [];
  const objCount = {};
  for (let i = 0; i < arr.length; i++) {
    objCount[arr[i]] ? objCount[arr[i]]++ : (objCount[arr[i]] = 1);
    if (objCount[arr[i]] <= n) res.push(arr[i]);
  }
  return res;
};

// console.log(deleteNth([20, 37, 20, 21], 1));

const oddOrEven = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
};

// console.log(oddOrEven([0]));
// console.log(oddOrEven([0, 1, 4]));
// console.log(oddOrEven([0, -1, -5]));

const likes = (arr) => {
  if (arr.length === 0) return `no one likes this`;
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  if (arr.length > 3)
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
};

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

const findOutlier = (arr) => {
  const objCount = { even: 0, odd: 0 };
  for (let i = 0; i < 3; i++) {
    if (arr[i] % 2 === 0) {
      objCount.even++;
    } else {
      objCount.odd++;
    }
  }
  const query = objCount.even > objCount.odd ? "even" : "odd";
  if (query === "even") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        return arr[i];
      }
    }
  }
  if (query === "odd") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        return arr[i];
      }
    }
  }
};

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

const opposite = (number) => {
  return -number;
};

// console.log(opposite(1));
// console.log(opposite(14));
// console.log(opposite(-34));

const getMiddle = (str) => {
  const middleInd = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.substr(middleInd - 1, 2);
  } else {
    return str[middleInd];
  }
};

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

const isIsogram = (str) => {
  let count;
  const splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    count = 0;
    for (let j = 0; j < splitStr.length; j++) {
      if (splitStr[i].toLowerCase() === splitStr[j].toLowerCase()) count++;
    }
    if (count >= 2) return false;
  }
  return true;
};

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
