const config = require('@shinnn/eslint-config');

Object.assign(config.env, {
  browser: false,
  worker: false,
  serviceworker: false
});

module.exports = config;
