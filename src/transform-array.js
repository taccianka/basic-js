const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  /* throw new CustomError('Not implemented');*/
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw Error("THROWN");

  let array = [];
  let flag = 0;

  console.log(arr, "\n\n");
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      array.push(arr[i]);
    } else if (typeof arr[i] == "string") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          flag = 1;
          break;
        case "--discard-prev":
          if (!flag) array.pop(arr[i]);
          else flag = 0;
          break;
        case "--double-next":
          if (arr[i + 1]) array.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (arr[i - 1]) {
            if (!flag) array.push(arr[i - 1]);
            else flag = 0;
          }
          break;
        default:
          array.push(arr[i]);
          break;
      }
    }
  }

  /*  array.forEach((element) => {
    if (Array.isArray(element)) transform(element);
  });
*/
  console.log("array =", array);
  return array;
};
