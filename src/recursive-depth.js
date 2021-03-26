const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
};

/*
module.exports = class DepthCalculator {
 /* calculateDepth(arr) {
    let depth = 0;
    let i = 0;
    console.log("first array", arr);
    if (arr == null) return depth;
    if (Array.isArray(arr)) {
      depth++;
      do {
        if (arr[i].isArray) {
          calculateDepth(arr[i]);
          depth++;
        } else i++;
      }while(1);
    }
    return depth;
  }
};*/
