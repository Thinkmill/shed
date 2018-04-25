# Thinkmill Scripts

## Prerequisites
**Node**  
You'll need to be using a version of Node.js greater than 8.x

**Yarn**  
Make sure you have `yarn` already installed globally. The easiest way to get it is via [brew](https://brew.sh/) - `brew install yarn`.

## Usage
```sh
$ npm i -g tm-scripts
```
## What
A series of basic scripts that scaffold up a project with Thinkmill specific conventions.

## Example
```sh
$ mkdir new-project && cd new-project
$ tm-scripts
```
1. Adds:
- .editorconfig
- .eslintrc
- .gitignore
- .prettierrc

2. Installs:
- eslint
- prettier
- babel-eslint
- prettier-eslint
