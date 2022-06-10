"use strict";

var _require = require('path'),
    join = _require.join;

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {}
  }
};