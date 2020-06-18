const util = require('util');
const mysql = require('mysql');

// connection to the database
const pool = mysql.createPool({
    host: 'myauthenticationgadcndatabaseserver.mysql.database.azure.com',
    user: "gadCNAdmin@myauthenticationgadcndatabaseserver",
    password: "3Hn!X0ry$Z!2G7eC",
    database: "quickstartdb",
    port: 3306,
    ssl: true
});

pool.getConnection((err, connection) => {
    if(err)
    {
        console.error("Something went wrong connecting to the database ...");
    }
        
    if(connection)
    {
        console.error("Connected to the database ...");
        connection.release();
    }
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;