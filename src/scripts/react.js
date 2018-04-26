const {
	installPackage,
	copyConfig,
} = require('../utils');

const react = () => {
	return new Promise(async res => {
		await installPackage('react');
		await installPackage('react-dom');
		await installPackage('react-router-dom');
		await installPackage('babel-preset-react', 'dev');
		await installPackage('eslint-plugin-react', 'dev');

		await copyConfig('react/.babelrc');
		await copyConfig('react/.eslintrc');
		res();
	});
};

module.exports = react;
