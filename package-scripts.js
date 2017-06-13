const { series, concurrent, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    build: "nps webpack.server",
    clean: {
      default: "nps clean.build",
      test: series(rimraf("test/coverage-karma")),
      build: series(
        rimraf("node_modules/aurelia-validation/node_modules"),
        rimraf("dist")
      )
    },
    lint: {
      default: series(
        "nps lint.source",
        "nps lint.test"
      ),
      source: "tslint ./src/**/*.ts",
      test: "tslint ./test/**/*.ts"
    },
    webpack: {
      build: {
        production: series(
          "nps lint.source",
          "nps clean.build",
          "webpack --progress -p --env.production --env.extractCss"
        ),
        development: series(
          "nps clean.build",
          "webpack --progress -p --env.extractCss"
        )
      },
      server: series(
        "nps clean.build",
        "webpack-dev-server -d --devtool \"#source-map\" --inline --env.server"
      )
    },
    unitTest: {
      default: series(
        "nps clean.test",
        "karma start test/karma.conf.js"
      )
    }
  }
};
