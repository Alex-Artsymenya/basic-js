const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	let flags = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
	let result = arr.slice(0);

	for (let i = 0; i < result.length; i++) {
		if (flags.includes(result[i])) {
			switch (result[i]) {
				case '--discard-next':
					if (i != result.length && !flags.includes(result[i + 1])) {
						result.splice(i + 1, 1);
					}
					break;
				case '--discard-prev':
					if (i != 0 && !flags.includes(result[i - 1])) {
						result.splice(i - 1, 1);
						i--;
					}
					break;
				case '--double-next':
					if (i != result.length && !flags.includes(result[i + 1])) {
						let insert = result[i + 1];
						result.splice(i + 1, 0, insert);
					}
					break;
				case '--double-prev':
					if (i != 0 && !flags.includes(result[i - 1])) {
						let insert = result[i - 1];
						result.splice(i - 1, 0, insert);
						i++;
					}
					break;
			}
		}
	}
	return result.filter(elem => (!flags.includes(elem) && elem !== undefined));
}

module.exports = {
	transform
};
