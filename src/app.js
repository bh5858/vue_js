require('./styles/usage/app.scss')

var common = require('./scripts/utils/util.com.js');

var html = require('./scripts/tpls/index.string')

common.render(html)

require('./scripts/views/index.js')