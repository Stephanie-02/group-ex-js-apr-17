let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

class DataClass {
  constructor(arr) {
    this._data = arr;
  }

  get data() {
    return this._data;
  }

  set data(param1) {
    this._data = param1;
  }

  static combine(obj1, obj2) {
    return obj1.data.concat(obj2.data);
  }

  static getPrimes(obj1) {
    let result = [];
    for (let i = 0; i < obj1.data.length; i++) {
      const element = obj1.data[i];
      if (isPrime(element)) {
        result.push(element);
      }
    }
    return result;
  }

  reverseSort() {
    this._data.sort((a, b) => b - a);
  }

  getMax() {
    let max = -1;
    for (let i = 0; i < this._data.length; i++) {
      const element = this._data[i];
      if (element > max) {
        max = element;
      }
    }
    return max;
  }
}

class NotData {}

let firstObj = new DataClass(dataArr);
let secondObj = new DataClass([3, 6, 29, 300]);
let notObject = new NotData();

if (firstObj instanceof DataClass) {
  console.log(true);
} else {
  console.log(false);
}

// console.log(firstObj);
// console.log(secondObj);

// console.log(firstObj.getMax());
// console.log(secondObj);
// secondObj.reverseSort();
// console.log(secondObj);

// let result = DataClass.combine(firstObj, secondObj);
// let result = DataClass.getPrimes(firstObj);
// console.log(result);
