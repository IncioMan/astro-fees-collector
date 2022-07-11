const { ProvidePlugin } = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
  };

  config.module.rules = [...config.module.rules, 
    {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
    }
  ];

  config.plugins.push(
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser.js',
    }),
  );

  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};
