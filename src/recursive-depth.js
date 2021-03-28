const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 0;
    this.count = 0;
  }

  maxDepth;
  count;

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.count++;
        this.calculateDepth(arr[i]);
      }
    }
    if (this.count > this.maxDepth) {
      this.maxDepth = this.count;
      this.count = 0;
    } else this.count = 0;
    return this.maxDepth + 1;
  }

  /* function depth(array, rec) {
      if (!Array.isArray(array)) throw new Exception('not an array');

      var res = rec;
      for(var i = 0; i < array.length; ++i) {
          if (Array.isArray(array[i])) {
          var subDepth = depth(array[i], rec + 1);
          if (subDepth > res) {
              res = subDepth;
          }
        }
      }
      return res;
      }
*/

  /* if (Array.isArray(arr)){
      count++;
      if (arr.flat() == arr)
      return;
    }
    for (let i = 0; i<arr.length; i++){
      if (Array.isArray[arr[i]) {
        this.count++;
        this.calculateDepth(arr[i]);
      } else return;
    }*/

  /*function flatDeep(arr, d = 1) {
      return d > 0
        ? arr.reduce(
            (acc, val) =>
              acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
            []
          )
        : arr.slice();
    }

    console.log(flatDeep(arr, Infinity));*/

  //return;
};

/*module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let i = 0;
    console.log("first array", arr);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (Array.isArray(arr)) depth++;

    if (Array.isArray(arr)) {
      depth++;
      do {
        if (Array.isArray(arr[i])) {
          arr.flat();
          depth++;
          calculateDepth(arr[i]);
        } else i++;
        if (arr == null) return depth;
        if (i == arr[i].length) break;
      } while (1);
    }
    return depth;
  }
};*/
