module.exports = {
	init: true,
	dependencies: [
		{ name: 'jest', dev: true },
		{ name: 'husky', dev: true },
		{ name: 'eslint', dev: true },
		{ name: 'prettier', dev: true },
		{ name: 'babel-cli', dev: true },
		{ name: 'babel-core', dev: true },
		{ name: 'lint-staged', dev: true },
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
		{ name: 'base/index.spec.js', dir: '__test__' },
		{ name: 'base/config.yml', dir: '.circleci/' },
	],
	scripts: {
		husky: {
			hooks: {
				'pre-commit': 'lint-staged'
			}
		},
		jest: {
			testEnvironment: 'node',
			testRegex: '\\.spec.js$'
		},
		'lint-staged': {
			'*.js': ['eslint --fix', 'git add']
		},
		prepublish: 'yarn test',
		'test:lint': 'yarn eslint',
		'test:unit': 'jest',
		test: 'yarn test:lint && yarn test:unit',
		'release:patch': 'yarn version patch && yarn tags && yarn push --tags',
		'release:minor': 'yarn version minor && yarn tags && yarn push --tags',
		'release:major': 'yarn version major && yarn tags && yarn push --tags'
	},
};
