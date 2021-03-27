const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
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
