const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	let result = {};
	if (arguments.length == 0) {
		return result;
	}

	for (let i = 0; i < domains.length; i++) {
		let str = '';
		let arr = domains[i].split('.');

		for (let j = arr.length - 1; j >= 0; j--) {
			str += `.${arr[j]}`;
			if (result.hasOwnProperty(str)) {
				result[str]++;
			} else {
				result[str] = 1;
			}
		}
	}
	return result;
}

module.exports = {
  getDNSStats
};
