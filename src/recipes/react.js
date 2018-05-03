module.exports = {
	init: false,
	dependencies: [
		{ name: 'react', dev: false },
		{ name: 'react-dom', dev: false },
		{ name: 'react-router-dom', dev: false },
		{ name: 'babel-preset-react', dev: true },
		{ name: 'eslint-plugin-react', dev: true },
	],
	config: [
		{ name: 'react/.babelrc' },
		{ name: 'react/.eslintrc' },
	],
};
