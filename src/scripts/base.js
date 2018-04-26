const {
	initYarn,
	installPackage,
	copyConfig,
} = require('../utils');

async function base () {
	await initYarn();

	await installPackage('babel-cli', 'dev');
	await installPackage('babel-core', 'dev');
	await installPackage('babel-preset-env', 'dev');
	await installPackage('babel-plugin-transform-class-properties', 'dev');
	await installPackage('babel-plugin-transform-object-rest-spread', 'dev');
	await installPackage('babel-eslint', 'dev');
	await installPackage('eslint', 'dev');
	await installPackage('prettier', 'dev');
	await installPackage('prettier-eslint', 'dev');

	await copyConfig('base/.babelrc');
	await copyConfig('base/.gitignore');
	await copyConfig('base/.eslintrc');
	await copyConfig('base/.prettierrc');
	await copyConfig('base/.editorconfig');
};

module.exports = base;
