const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultString = "";
  let separator = "";
  let addition = "";
  let additionSepar = "";

  if (options.hasOwnProperty("separator")) {
    separator = options.separator;
  } else {
    separator = "+";
  }

  if (options.hasOwnProperty("additionSeparator")) {
    additionSepar = options.additionSeparator;
  } else {
    additionSepar = "|";
  }

  if (options.hasOwnProperty("addition")) {
    addition = options.addition;
  }

  if (options.hasOwnProperty("additionRepeatTimes")) {
    if (options.additionRepeatTimes > 1) {
      addition = addition + additionSepar;
      addition = addition.repeat(options.additionRepeatTimes);
      addition = addition.slice(0, -additionSepar.length);
    }
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (i = 0; i < options.repeatTimes; i++) {
      resultString = resultString + str + addition + separator;
    }
    resultString = resultString.slice(0, -separator.length);
  } else {
    resultString = resultString + str + addition;
  }

  return resultString;
};
