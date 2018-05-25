const fs = require('fs');
const util = require('util');
const path = require('path');
const chalk = require('chalk');
const execa = require('execa');
const inquirer = require('inquirer');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const CWD_PKG_JSON = path.join(process.cwd(), './package.json');

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

const makeDish = async ({
	init = false,
	packages = { dep: [], dev: [] },
	config = [],
	scripts = {},
}) => {
	// Initialise your package.json.
	if (init) await initYarn();

	// Install dependencies.
	for (let key in packages) {
		await installPackages({ key, packages: packages[key] });
	}

	// Copy config.
	for (let item of config) await copyConfig(item);

	// Add Yarn scripts.
	await addScripts(scripts);
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

const installPackages = async ({ key, packages }) => {
	if (!packages.length) return;
	const options = ['add', ...packages];
	if (key === 'dev') options.push('--dev');

	try {
		log(chalk.magenta(`Installing ${packages.join(', ')}`));
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

const readPkg = () => {
	return new Promise(async res => {
		let pkg = await readFile(CWD_PKG_JSON, 'utf8');
		pkg = JSON.parse(pkg);
		if (!pkg.scripts) pkg.scripts = {};
		res(pkg);
	});
};

const createScripts = (pkg, scripts) => {
	Object.keys(scripts).forEach(key => {
		if (typeof scripts[key] === 'object') pkg[key] = scripts[key];
		else pkg.scripts[key] = scripts[key];
	});
	return pkg;
};

const writePkg = async pkg => {
	return await writeFile(CWD_PKG_JSON, JSON.stringify(pkg, null, 2));
};

const addScripts = async scripts => {
	const pkg = await readPkg();
	const pkgXtra = await createScripts(pkg, scripts);
	await writePkg(pkgXtra);
	log(chalk.green('Added scripts.'));
};

module.exports = {
	inquire,
	makeDish,
};
