const R = require('ramda');

const simulate = require('./simulate.js');


const args = R.drop(2, process.argv);
const [roundsStr, ...names] = args;
const rounds = parseInt(roundsStr, 10);

console.log(
	simulate(rounds, names)
);
