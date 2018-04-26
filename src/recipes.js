module.exports = {
	base: {
		init: true,
		dependencies: [
			{ name: 'babel-cli', dev: true },
			{ name: 'babel-core', dev: true },
			{ name: 'babel-preset-env', dev: true },
			{ name: 'babel-plugin-transform-class-properties', dev: true },
			{ name: 'babel-plugin-transform-object-rest-spread', dev: true },
			{ name: 'babel-eslint', dev: true },
			{ name: 'eslint', dev: true },
			{ name: 'prettier', dev: true },
			{ name: 'prettier-eslint', dev: true },
		],
		config: [
			{ name: 'base/.babelrc' },
			{ name: 'base/.gitignore' },
			{ name: 'base/.eslintrc' },
			{ name: 'base/.prettierrc' },
			{ name: 'base/.editorconfig' },
			{ name: 'base/config.yml', dir: '.circleci/' },
		],
	},
	react: {
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
	},
	// Add your recipe here.
};
