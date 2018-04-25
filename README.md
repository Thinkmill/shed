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

# 1. Installs: eslint, prettier, babel-eslint, prettier-eslint
# 2. Adds: .editorconfig, .eslintrc, .gitignore, .prettierrc
```

## Todo
- [ ] Extend it to accomodate different types of 'recipes'
- [ ] Add [Inquirer](https://github.com/SBoudrias/Inquirer.js)
- [ ] Get buy-in from everyone to contribute to this repo
- [ ] Watch everyone else flesh this thing out....
