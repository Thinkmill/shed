const recipes = require('./recipes');
const {
	inquire,
	makeDish,
} = require('./utils');

module.exports = async () => {
	const { menu = [] } = await inquire();
	menu.unshift('base');
	for (let dish of menu) await makeDish(recipes[dish]);
};
