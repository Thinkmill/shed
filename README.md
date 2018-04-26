# Thinkmill Scripts

## What
A series of simple scripts to scaffold up a project with Thinkmill specific conventions.

## Prerequisites
**Node**  
You'll need to be using a version of Node.js equal to or greater than `8.x`

**Yarn**  
Make sure you have `yarn` already installed globally. The easiest way to get it is via [brew](https://brew.sh/) - `brew install yarn`.

## Usage
```sh
$ npx tm-scripts
# or
$ npm i -g tm-scripts
```

## Example
```sh
$ mkdir new-project && cd new-project
$ npx tm-scripts
```

## Recipes
#### Base
Your stock standard TM devDependencies and config files. Including:
**Installs:**  
`eslint, prettier, babel-eslint, prettier-eslint, babel and friends`  
**Adds:**  
`.editorconfig, .eslintrc, .gitignore, .prettierrc, .babelrc`

#### React
**Installs:**  
`react, react-dom, react-router-dom, babel and friends, react-related eslint plugins`  
**Amends:**  
`.eslintrc, .babelrc`

## Contributing
It's easy to add your own, or upgrade a recipe. There's 3 places you'll need to add your code:
1. `./src/index` - Add your recipe to make sure Inquirer knows what to look for.
2. `./src/config/[your-recipe-config]` - Amend or add any config to the config files.
3. `./src/scripts/[your-recipe]` - What to install and what config to copy.

## Todo
- [x] Extend it to accomodate different types of 'recipes'
- [x] Add [Inquirer](https://github.com/SBoudrias/Inquirer.js)
- [ ] Get buy-in from everyone to contribute to this repo
- [ ] Watch everyone else flesh this thing out....
