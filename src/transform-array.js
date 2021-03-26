const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error("THROWN");

  let array = [];
  let flag = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      array.push(arr[i]);
      flag = 0;
    } else if (typeof arr[i] == "string") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          flag = 1;
          break;
        case "--discard-prev":
          if (!flag) array.pop(arr[i]);
          flag = 0;
          break;
        case "--double-next":
          if (!(arr[i + 1] === undefined)) {
            array.push(arr[i + 1]);
          }
          flag = 0;
          break;
        case "--double-prev":
          if (!(arr[i - 1] === undefined)) {
            if (!flag) {
              array.push(arr[i - 1]);
            }
          }
          flag = 0;
          break;
        default:
          array.push(arr[i]);
          flag = 0;
          break;
      }
    }
  }

  return array;
};
