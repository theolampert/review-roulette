const R = require('ramda');
const sample = require('lodash.sample');


const makePadding = (longestName, name) => {
	const n = longestName.length - name.length + 1;
	return ' '.repeat(n);
}


module.exports = (rounds, names) => {
	const longestName = R.last(R.sortBy(R.length)(names));
	let samples = [];
	let output;
	R.range(0, rounds).forEach((i) => {
		samples = [...samples, sample(names)];
		const bins = R.groupBy(R.identity, samples);
		output = names.map((name) => {
			const bar = '◼︎'.repeat((bins[name] || []).length);
			return `${name}${makePadding(longestName, name)}${bar}`;
		});
	});
	return output.join('\n');
};