const { inquire } = require('./utils');
const { base, react } = require('./scripts');

const run = async () => {
	const { configs } = await inquire();

	await base();
	if (configs.includes('React')) await react();
};

module.exports = run();
