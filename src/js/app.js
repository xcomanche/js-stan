window.app = window.app || /* istanbul ignore next */ {};

var base = require('./application'),
    config = require('../config/options'),
    i18n = require('./translate');

window.app.runtime = new base();
window.app.runtime.run();