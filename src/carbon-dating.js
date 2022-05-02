const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (arguments.length === 0) return false;

  let activity = MODERN_ACTIVITY / + sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  let result =  Math.log(activity) / k;

  if (result === Infinity) return false;
  return  result > 0 ? Math.ceil(result) : false;
}

module.exports = {
  dateSample
};

