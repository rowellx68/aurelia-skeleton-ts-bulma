# Aurelia Webpack Skeleton

## Getting Started
Make sure you have a recent version of NodeJS *>=6.0* with NPM 3 or Yarn.

From the project folder, execute the following command:

```shell
npm install # or yarn install
```

This will install the dependencies, including a local version of Webpack and TypeScript. So no need to have them installed globally.

To run the application, execute the following command:

```shell
npm start # or yarn start
```

The command will start the webpack development server that watches for file changes. The site should then be accessible at [http://localhost:8080](http://localhost:8080/).


## Building
To build an optimised and minified production bundle, execute the following command:

```shell
npm run build # or yarn build
```

## Requirements
1. Node >= 6
2. npm / yarn
3. TypeScript - `npm install -g typescript`
4. TSLint - `npm install -g tslint`
5. IDE of your choice, [VS Code](https://code.visualstudio.com/) highly suggested

## Notes
This starter project's `webpack.config.js`, `karma-bundle.js` and `karma-conf.js` has been derrived from the official Aurelia skeleton project.
