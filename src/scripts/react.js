const {
	installPackage,
	copyConfig,
} = require('../utils');

const react = () => {
	return new Promise(async res => {

		// Install dependencies.
		await installPackage('react');
		await installPackage('react-dom');
		await installPackage('react-router-dom');
		await installPackage('babel-preset-react', 'dev');
		await installPackage('eslint-plugin-react', 'dev');

		// Add config files.
		await copyConfig('react/.babelrc');
		await copyConfig('react/.eslintrc');
		res();
	});
};

module.exports = react;
