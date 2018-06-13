const express = require('express');
const bodyParser = require('body-parser');
const R = require('ramda');

const simulate = require('./simulate.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post(
	'/',
	(req, res) => {
		res.setHeader('Content-Type', 'application/json');

		const { text } = req.body;
		const [roundsStr, ...names] = text.split(' ');
		const rounds = parseInt(roundsStr, 10);

		res.send(
			JSON.stringify({
				response_type: 'in_channel',
				text: `\`\`\`${simulate(rounds, names)}\`\`\``,
			})
		);
	}
);

const port = 3030;
const server = app.listen(port, (err) => {
	if (err) { throw err; }
	console.log(`http://localhost:${port}/`);
});
