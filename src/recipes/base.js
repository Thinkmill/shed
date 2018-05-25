module.exports = {
	init: true,
	packages: {
		dep: [],
		dev: [
			'jest',
			'husky',
			'eslint',
			'prettier',
			'babel-cli',
			'babel-core',
			'lint-staged',
			'babel-eslint',
			'prettier-eslint',
			'babel-preset-env',
			'babel-plugin-transform-class-properties',
			'babel-plugin-transform-object-rest-spread',
		],
	},
	config: [
		{ name: 'base/.babelrc' },
		{ name: 'base/.gitignore' },
		{ name: 'base/.eslintrc' },
		{ name: 'base/.eslintignore' },
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
		'test:lint': 'eslint .',
		'test:lint:ci': 'eslint . --format junit -o reports/junit/js-lint-results.xml',
		'test:unit': 'jest',
		test: 'yarn test:lint && yarn test:unit',
		prepublishOnly: 'yarn test',
		'release:patch': 'npm version patch && git push && git push --tags',
		'release:minor': 'npm version minor && git push && git push --tags',
		'release:major': 'npm version major && git push && git push --tags'
	},
};
