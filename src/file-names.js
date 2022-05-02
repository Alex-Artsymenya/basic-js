const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
	let obj = {};
	let result = [];

	for (let i = 0; i < names.length; i++) {
		if (!obj.hasOwnProperty(names[i])) {
			result.push(names[i]);
			obj[names[i]] = 0;
		} else {
			let count = ++obj[names[i]];
			let temp = `${names[i]}(${count})`;
			result.push(temp);
			if (obj.hasOwnProperty(temp)) {
				obj[temp] = count;
			} else {
				obj[temp] = 0;
			}
		}
	}
	return result;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles
};
