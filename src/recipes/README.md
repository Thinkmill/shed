# **Recipes**

This is where our recipes live (for now). Feel free to add more or extend an existing one.

## Base
#### DevDependencies
```
babel-cli
babel-core
babel-eslint
babel-plugin-transform-class-properties
babel-plugin-transform-object-rest-spread
babel-preset-env
eslint
husky
jest
lint-staged
prettier
prettier-eslint
```

#### Config
```
.babelrc
.circleci
.editorconfig
.eslintrc
.gitignore
.prettierrc
package.json
```

#### Scripts
```JSON
"scripts": {
    "prepublish": "yarn test",
    "test:lint": "yarn eslint",
    "test:unit": "jest",
    "test": "yarn test:lint && yarn test:unit",
    "release:patch": "yarn version patch && yarn tags && yarn push --tags",
    "release:minor": "yarn version minor && yarn tags && yarn push --tags",
    "release:major": "yarn version major && yarn tags && yarn push --tags"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "jest": {
    "testEnvironment": "node",
    "testRegex": "\\.spec.js$"
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  }
```

## Base
#### Dependencies
```
react
react-dom
react-dom-router
```

#### Dependencies
```
babel-preset-react
eslint-plugin-react
```

#### Config
```
.babelrc
.eslintrc
```
