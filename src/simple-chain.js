const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	chain: [],

	getLength() {
		return chainMaker.chain.length;
	},
	addLink(value) {
		arguments.length > 0 ? chainMaker.chain.push(value) : chainMaker.chain.push('');
		return this;
	},
	removeLink(position) {
		if (!Number.isInteger(position) || position <= 0 || position > chainMaker.chain.length) {
			chainMaker.chain = [];
			throw new Error("You can't remove incorrect link!");
		} else {
			chainMaker.chain.splice(position - 1, 1);
		}
		return this;
	},
	reverseChain() {
		chainMaker.chain.reverse();
		return this;
	},
	finishChain() {
		let result = '';
		for (let i = 0; i < chainMaker.chain.length; i++) {
			if (i == chainMaker.chain.length - 1) {
				result += `( ${chainMaker.chain[i]} )`;
			} else {
				result += `( ${chainMaker.chain[i]} )~~`;
			}
		}
		chainMaker.chain = [];
		return result;
	}
};
module.exports = {
  chainMaker
};
