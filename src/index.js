const { inquire } = require('./utils');
const { base, react } = require('./scripts');

const run = async () => {
	const { configs } = await inquire();

	if (configs.includes('Base')) await base();
	if (configs.includes('React')) await react();
};

module.exports = run();
