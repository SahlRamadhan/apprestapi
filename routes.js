'use strict';

module.exports = function (app) {
    var json = require('./controller');

    app.get('/json', json.index);
}