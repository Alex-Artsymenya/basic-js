const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let arr = str.split('');
	let temp = 1;
	let result = '';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != arr[i + 1]) {
			if (temp == 1) {
				result += arr[i];
			} else {
				result = result + temp + arr[i];
			}
			temp = 1;
		} else {
			temp++;
		}
	}
	return result;
}

module.exports = {
  encodeLine
};
