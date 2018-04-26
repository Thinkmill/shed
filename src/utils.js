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
			{ name: 'Base', checked: true, disabled: true },
			{ name: 'React' },
		],
	}]);
};

const initYarn = async () => {
	try {
		// Create a private project -> '-yp'.
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

const copyConfig = async (filename, dir) => {
	log(chalk.cyan(`Copying ${filename}`));

	let dirPath;
	let filePath = path.join(__dirname, 'config', filename);
	let options = ['-r', filePath];

	if (dir) {
		dirPath = path.join(process.cwd(), dir);
		options.push(dirPath);
		await execa('mkdir', ['-p', dirPath]);
	} else {
		options.push(process.cwd());
	}

	try {
		await execa('cp', options);
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
