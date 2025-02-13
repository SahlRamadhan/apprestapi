'use strict';

module.exports = function (app) {
    var json = require('./controller');

    app.route('/').get(json.index);
    
    app.route('/mahasiswa').get(json.tampildata);

    app.route('/mahasiswa/:id').get(json.tampildataID);

    app.route('/mahasiswa/tambah').post(json.tambahdata);

    app.route('/mahasiswa/update/:id').put(json.updatedata);

    app.route('/mahasiswa/delete/:id').delete(json.deletedata);
}