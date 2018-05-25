const chalk = require('chalk');

const recipes = require('./recipes');
const {
	inquire,
	makeDish,
} = require('./utils');

module.exports = async () => {
	const { menu = [] } = await inquire();
	menu.unshift('base');
	for (let dish of menu) await makeDish(recipes[dish]);
	console.log(chalk.black.bgGreen('\n~~~~~~~~~~~~~~~~~~~~~\nYou\'ve left The Shed.\n~~~~~~~~~~~~~~~~~~~~~\n'));
};
