const {
	hasBase,
	installPackage,
	copyConfig,
} = require('../utils');

async function react () {
	const result = await hasBase();
	if (!result) await require('./base')();

	await installPackage('react');
	await installPackage('react-dom');
	await installPackage('react-router-dom');
	await installPackage('babel-preset-react', 'dev');
	await installPackage('eslint-plugin-react', 'dev');

	await copyConfig('react/.babelrc');
	await copyConfig('react/.eslintrc');
};

module.exports = react;
