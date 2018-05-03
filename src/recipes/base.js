module.exports = {
	init: true,
	dependencies: [
		{ name: 'jest', dev: true },
		{ name: 'husky', dev: true },
		{ name: 'eslint', dev: true },
		{ name: 'prettier', dev: true },
		{ name: 'babel-cli', dev: true },
		{ name: 'babel-core', dev: true },
		{ name: 'babel-eslint', dev: true },
		{ name: 'prettier-eslint', dev: true },
		{ name: 'babel-preset-env', dev: true },
		{ name: 'babel-plugin-transform-class-properties', dev: true },
		{ name: 'babel-plugin-transform-object-rest-spread', dev: true },
	],
	config: [
		{ name: 'base/.babelrc' },
		{ name: 'base/.gitignore' },
		{ name: 'base/.eslintrc' },
		{ name: 'base/.prettierrc' },
		{ name: 'base/.editorconfig' },
		{ name: 'base/config.yml', dir: '.circleci/' },
	],
	scripts: {
		husky: {
			hooks: {
				'pre-commit': 'yarn eslint'
			}
		},
		test: 'jest',
		prepublish: 'yarn test',
		'release:patch': 'npm version patch && npm tags && npm push --tags',
		'release:minor': 'npm version minor && npm tags && npm push --tags',
		'release:major': 'npm version major && npm tags && npm push --tags'
	},
};
