'use strict';


var response = require('./res');

var connection = require('./connection');

exports.index = function (req, res) {
    response.ok("Testing", res)
}

exports.tampildata = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}


exports.tampildataID = function (req, res) {
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error)
             res.status(500).json({ message: 'Database error', error: error });
        } else {
            response.ok(rows, res)
        }
    })
}