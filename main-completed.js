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

class Data {
  static CASE_UNKNOWN = -1;
  static CASE_ODD = 1;
  static CASE_EVEN = 2;
  static CASE_PRIME = 3;

  constructor(data) {
    this._data = data;
    this.state = Data.CASE_UNKNOWN;
  }

  static combine(dataObj1, dataObj2) {
    let result = dataObj1.data.concat(dataObj2.data);
    return result;
  }

  static getPrimes(dataObj) {
    let result = [];
    for (let i = 0; i < dataObj.data.length; i++) {
      const element = dataObj.data[i];
      if (isPrime(element)) {
        result.push(element);
      }
    }
    return result;
  }

  get data() {
    return this._data;
  }

  set data(ourData) {
    if (Array.isArray(ourData)) {
      this._data = ourData;
    } else {
      this._data = [];
    }
  }

  getOurData() {
    return this._data;
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

  changeToReverse() {
    this._data.sort((a, b) => b - a);
  }

  getInstance() {}
}

class NotData {
  dontDoAnything() {}
}

let firstObj = new Data(dataArr);
let secondObj = new Data([3, 5, 2347, 24637]);
let bothDataArr = Data.combine(firstObj, secondObj);
let notObject = new NotData();

// console.log(firstObj);
// console.log(firstObj.getMax());
// console.log(secondObj.getMax());

// console.log(firstObj);
// firstObj.changeToReverse();
// console.log(firstObj);

// let justPrimes = Data.getPrimes(firstObj);
// console.log(justPrimes);

let var1 = [];

firstObj = new NotData();

if (firstObj instanceof Data) {
  firstObj.changeToReverse();
} else if (firstObj instanceof NotData) {
  firstObj.dontDoAnything();
}
