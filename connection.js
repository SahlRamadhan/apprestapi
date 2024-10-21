var maysql = require('mysql');
var connection = maysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restapi'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('connected');
});

module.exports = connection