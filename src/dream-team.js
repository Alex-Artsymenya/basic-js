const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
	if (!Array.isArray(arguments[0])) return false;

	let result = '';
	let sortMembers = members
		.filter(member => typeof member === 'string')
		.map(member => member.replace(/\s/g, '').toUpperCase().trim());

	sortMembers.sort().forEach(member => result += member.charAt(0));
	return result;
}


module.exports = {
  createDreamTeam
};
