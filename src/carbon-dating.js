const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  if (
    typeof sampleActivity != "string" ||
    /["0"-"9"]/.test(sampleActivity) == false
  )
    return false;

  let t;
  sampleActivity = +sampleActivity;
  const k = Math.LN2 / HALF_LIFE_PERIOD;
  let a0a = MODERN_ACTIVITY / sampleActivity;

  t = Math.log1p(a0a) / k;

  return Math.ceil(t);
  // remove line with error and write your code here
};
