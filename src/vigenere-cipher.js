const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
	alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	length = this.alphabet.length;
	isReverse = true;

	constructor() {
		if (arguments.length == 0) {
			this.isReverse = false;
		}
		if (arguments[0] === true) {
			this.isReverse = false;
		}
	}

	incKey(message, key) {
		let diff = message.length - key.length;
		let index = 0;
		let arr = key.split('');

		for (let i = 0; i < diff; i++) {
			if (index == arr.length) {
				index = 0;
			}
			key += arr[index];
			index++;
		}
		return key.toUpperCase();
	}

	encrypt(message, key) {
		if (arguments.length != 2 || arguments[0] === undefined || arguments[1] === undefined) {
			throw new Error('Incorrect arguments!');
		}
		let result = '';
		let messArr = message.toUpperCase().split('');
		let keyArr = this.incKey(message, key).split('');

		for (let i = 0; i < messArr.length; i++) {
			if (this.alphabet.includes(messArr[i])) {
				let ind = this.alphabet.indexOf(messArr[i]) + this.alphabet.indexOf(keyArr[i]);
				if (ind >= this.length) {
					ind = ind - this.length;
				}
				result += this.alphabet[ind];
			} else {
				result += messArr[i];
				messArr.splice(i, 1);
				i--;
			}
		}
		return this.isReverse ? result.split('').reverse().join('') : result;
	}

	decrypt(message, key) {
		if (arguments.length != 2 || arguments[0] === undefined || arguments[1] === undefined) {
			throw new Error('Incorrect arguments!');
		}
		let result = '';
		let keyArr = this.incKey(message, key).split('');
		let messArr = message.split('');

		for (let i = 0; i < messArr.length; i++) {
			if (this.alphabet.includes(messArr[i])) {
				let ind = this.alphabet.indexOf(messArr[i]) - this.alphabet.indexOf(keyArr[i]);
				if (ind < 0) {
					ind = this.length + ind;
				}
				result += this.alphabet[ind];
			} else {
				result += messArr[i];
				messArr.splice(i, 1);
				i--;
			}
		}
		return this.isReverse ? result.split('').reverse().join('') : result;
	}
}

const directMachine = new VigenereCipheringMachine(true);
console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
	VigenereCipheringMachine
};

