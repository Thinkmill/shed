const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const inquirer = require('inquirer');

const log = console.log;

const inquire = async () => {
	return await inquirer.prompt([{
		type: 'checkbox',
		message: 'Specify your configs',
		name: 'configs',
		choices: [
			{ name: 'Base', checked: true },
			{ name: 'React' },
		],
	}]);
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
	inquire,
	initYarn,
	installPackage,
	copyConfig,
};
