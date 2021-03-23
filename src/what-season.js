const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date == null) return "Unable to determine the time of year!";

  let month = date.getMonth();

  if (
    date.getDate() <= 0 ||
    date.getDate() > 31 ||
    date.getMonth() < 0 ||
    date.getMonth() > 11 ||
    !date.getTime()
  )
    throw Error("THROWN");

  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
      break;
    case 2:
    case 3:
    case 4:
      return "spring";
      break;
    case 5:
    case 6:
    case 7:
      return "summer";
      break;
    case 8:
    case 9:
    case 10:
      return "autumn";
      break;
  }
};
