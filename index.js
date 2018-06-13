const R = require('ramda');

function sample(list) {
	const length = list == null ? 0 : list.length;
	return length ? list[Math.floor(Math.random() * length)] : undefined;
}

const args = R.drop(2, process.argv);
const [roundsStr, ...names] = args;
const rounds = parseInt(roundsStr, 10);

let samples = [];
R.range(0, rounds).forEach((i) => {
	console.log(`\nround #${i + 1}`);
	samples = [...samples, sample(names)];
	const bins = R.groupBy(R.identity, samples);
	names.forEach((name) => {
		const bar = '⬛︎'.repeat((bins[name] || []).length);
		console.log(`${name}\t${bar}`);
	});
});
