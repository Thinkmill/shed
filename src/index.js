const path = require('path');
const chalk = require('chalk');
const execa = require('execa');

const log = console.log;

const initYarn = async () => {
	try {
		const { stdout } = await execa('yarn', ['init', '-yp']);
		log(chalk.yellow(stdout));
	} catch (e) {
		log(chalk.red(e));
	}
}

const installPackage = async pkgName => {
	try {
		const { stdout } = await execa('yarn', ['add', '--dev', pkgName]);
		log(chalk.magenta(stdout));
	} catch (e) {
		log(chalk.red(e));
	}
};


const copyConfig = async filename => {
	const filePath = path.join(__dirname, 'config', filename);
	log(chalk.cyan(`Copying ${filename}`));

	try {
		await execa('cp', [filePath, process.cwd()]);
	} catch (e) {
		log(chalk.red(e));
	}
};

async function run () {
	await initYarn();

	await installPackage('eslint');
	await installPackage('prettier');
	await installPackage('babel-eslint');
	await installPackage('prettier-eslint');

	await copyConfig('.gitignore');
	await copyConfig('.eslintrc');
	await copyConfig('.prettierrc');
	await copyConfig('.editorconfig');
}

module.exports = run();
