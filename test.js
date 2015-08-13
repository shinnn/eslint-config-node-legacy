/* eslint-disable no-process-exit */
'use strong';

const {spawn} = require('child_process');

const log = require('logalot');

spawn('node', [
  'node_modules/eslint/bin/eslint.js',
  '--config',
  require('./package.json').name,
  '.'
], {stdio: 'inherit'}).on('exit', code => {
  if (code !== 0) {
    process.exit(code);
  }

  log.success('Rules are configured as you expected.');
});
