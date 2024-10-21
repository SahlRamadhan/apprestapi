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


exports.tambahdata = function (req, res) {
    let nama = req.body.nama_mhs
    let nim = req.body.nim_mhs
    let jurusan = req.body.jurusan_mhs
    connection.query('INSERT INTO mahasiswa (nama_mhs, nim_mhs, jurusan_mhs) VALUES (?, ?, ?)', [nama, nim, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error)
             res.status(500).json({ message: 'Database error', error: error });
        } else {
            response.ok("Berhasil Menabahkan Data", res)
        }
    })
}