import "aurelia-polyfills";
import "aurelia-loader-webpack";
import { install as installJasmineAsync } from "jest-jasmine2/jasmine-async";

installJasmineAsync(global);

installJestExpect();
global.jest = false;

Error.stackTraceLimit = Infinity;

const testModuleContexts = loadTestModules();
runTests(testModuleContexts);

function loadTestModules() {
  const srcContext = require.context(
    // directory:
    "../src",
    // recursive:
    true,
    // tests in /src folder regex:
    /\.spec\.[tj]s$/igm
  );

  const testContext = require.context(
    // directory:
    "./unit-test",
    // recursive:
    true,
    // tests in ./unit folder regex:
    /\.spec\.[tj]s$/igm
  );

  return [srcContext, testContext];
}

function runTests(contexts) {
  contexts.forEach(requireAllInContext);
}

function requireAllInContext(requireContext) {
  return requireContext.keys().map(requireContext);
}

function installJestExpect() {
  const expect = require("jest-matchers");
  global.expect = expect;

  const jasmine = global.jasmine;
  jasmine.anything = expect.anything;
  jasmine.any = expect.any;
  jasmine.objectContaining = expect.objectContaining;
  jasmine.arrayContaining = expect.arrayContaining;
  jasmine.stringMatching = expect.stringMatching;
  jasmine.addMatchers = (jasmineMatchersObject) => {
    const jestMatchersObject = Object.create(null);
    Object.keys(jasmineMatchersObject).forEach(name => {
      jestMatchersObject[name] = function () {
        const result = jasmineMatchersObject[name](jasmine.matchersUtil, null);
        // if there is no "negativeCompare", both should be handled by `compare`
        const negativeCompare = result.negativeCompare || result.compare;

        return this.isNot
          ? negativeCompare.apply(null, arguments)
          : result.compare.apply(null, arguments);
      };
    });

    const expect = global.expect;
    expect.extend(jestMatchersObject);
  };
}
