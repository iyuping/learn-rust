const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  webpack: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );

      if (isFound) {
        const babelLoader = match.loader;

        const include = Array.isArray(babelLoader.include)
          ? babelLoader.include
          : [babelLoader.include];
        const packages = [
          path.resolve(__dirname, '../../packages/components/src'),
        ];

        babelLoader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
