/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Workaround for lack of babel-loader on runtime when importing a component from an external package
// Long term solution: ditch create-react-app! to have free access to webpack config. 
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../ui-components"));

console.log(packages);

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
