const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const execa = require('execa');

const log = console.log;

const hasBase = async () => {
	// TODO: Checking for .eslintrc is not safe enough.
	return new Promise(res => {
		fs.readFile(path.join(process.cwd(), '.eslintrc'), 'utf8', err => {
			if (err) res(false);
			else res(true);
		});
	});
};

const initYarn = async () => {
	try {
		const { stdout } = await execa('yarn', ['init', '-yp']);
		log(chalk.yellow(stdout));
	} catch (e) {
		log(chalk.red(e));
	}
};

const installPackage = async (pkgName, dev) => {
	let options = ['add', pkgName];
	if (dev) options.push('--dev');

	try {
		const { stdout } = await execa('yarn', options);
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

module.exports = {
	hasBase,
	initYarn,
	installPackage,
	copyConfig,
};
