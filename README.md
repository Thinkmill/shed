# **The Ol' Bike Shed**

## What
A series of simple scripts (aka _**recipes**_) to scaffold up a project with Thinkmill specific conventions.

## Prerequisites
```sh
node >=8
yarn
# If you don't have it, `brew install yarn`
```

## Usage
```sh
$ npx @thinkmill/scripts
# or
$ npm i -g @thinkmill/scripts
```

## Example
```sh
$ mkdir new-project && cd new-project
$ npx @thinkmill/scripts
```

## Recipes
#### Base
Your stock standard TM `devDependencies` and config files.
```sh
# Dir structure
.
├── .babelrc
├── .circleci
│   └── config.yml
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── __test__
│   └── index.spec.js
├── package.json
└── yarn.lock
```

#### React _(I think this needs some work...)_
A stripped-down version of [create-react-app](https://github.com/facebook/create-react-app).

## Contributing
It's easy to add or upgrade a recipe. There's 3 places you'll need to add your code:
1. `./src/recipes` - Add your recipe to make sure Inquirer knows what to look for.
2. `./src/config/[your-recipe-config]` - Amend or add any config to the config files.

## Todo
- [x] Extend it to accomodate different types of 'recipes'
- [x] Add [Inquirer](https://github.com/SBoudrias/Inquirer.js)
- [x] Precommit, prepublish and ci scripts.
- [x] Publish to npm
- [ ] Get buy-in from everyone to contribute to this repo
- [ ] Watch everyone else flesh this thing out....
