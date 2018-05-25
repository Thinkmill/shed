module.exports = {
	init: false,
	packages: {
		deps: ['react', 'react-dom', 'react-router-dom'],
		dev: ['babel-preset-react', 'eslint-plugin-react'],
	},
	config: [
		{ name: 'react/.babelrc' },
		{ name: 'react/.eslintrc' },
	],
};
