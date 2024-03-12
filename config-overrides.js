const path = require('path');

module.exports = function override(config, env) {
  // Add the html-loader rule
  config.module.rules.push({
    test: /\.html$/,
    use: [{ loader: 'html-loader' }],
  });

  return config;
};
