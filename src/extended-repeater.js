const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

	let result = '';
	str = String(str);
	console.log(str);
	if (!options.repeatTimes && !options.additionRepeatTimes) {
		return `${str}${options.addition}`;
	}
	if (!options.separator) {
		options.separator = '+';
	}
	if (!options.additionSeparator) {
		options.additionSeparator = '|';
	}


	for (let i = 0; i < options.repeatTimes; i++) {
		if (options.additionRepeatTimes) {
			options.addition = String(options.addition);
			result += str;
			for (let j = 0; j < options.additionRepeatTimes; j++) {
				if (j != options.additionRepeatTimes - 1) {
					result = `${result}${options.addition}${options.additionSeparator}`;
					//result += options.addition + options.additionSeparator;
				} else {
					result = `${result}${options.addition}`;
					//result += options.addition;
				}
			}
		} else if (options.addition) {
			options.addition = String(options.addition);
			result += str + options.addition;
		} else {
			result += str;
		}
		if (i != options.repeatTimes - 1) {
			result += options.separator;
		}
	}
	return result;
}


module.exports = {
  repeater
};
