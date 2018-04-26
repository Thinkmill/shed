const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const inquirer = require('inquirer');

const log = console.log;

const inquire = async () => {
	return await inquirer.prompt([{
		type: 'checkbox',
		message: 'Choose your recipes',
		name: 'recipes',
		choices: [
			{ name: 'base', checked: true, disabled: true },
			{ name: 'react' },
		],
	}]);
};

const makeDish = async ({ init, dependencies, config }) => {
	// Initialise your package.json.
	if (init) await initYarn();

	// Install dependencies.
	for (let dep of dependencies) {
		await installPackage(dep);
	}

	// Copy config.
	for (let item of config) {
		await copyConfig(item);
	}
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

const installPackage = async ({ name, dev }) => {
	let options = ['add', name];
	if (dev) options.push('--dev');

	try {
		const { stdout } = await execa('yarn', options);
		log(chalk.magenta(stdout));
	} catch (e) {
		log(chalk.red(e));
	}
};

const copyConfig = async ({ name, dir }) => {
	log(chalk.cyan(`Copying ${name}`));

	let dirPath;
	let filePath = path.join(__dirname, 'config', name);
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
	makeDish,
};
