# TypeScript Auth Module

This is just an experiment.

## Setup of TS project

* Got tsconfig and .mocharc from [mocha examples](https://github.com/mochajs/mocha-examples/tree/master/packages/typescript)
* Fixed [imports with ts-node/mocha](https://stackoverflow.com/questions/54375083/using-assert-with-ts-node-in-mocha-test)
* Fixed [Error while loading rule '@typescript-eslint/dot-notation'](https://stackoverflow.com/questions/64116378/error-while-loading-rule-typescript-eslint-dot-notation)
* After ESLint setup, installed [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript) and uninstalled `eslint-config-airbnb-base`, replaced `airbnb-base` with `airbnb-typescript/base`.