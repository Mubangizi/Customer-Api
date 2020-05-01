const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

connection.query(
  `CREATE TABLE IF NOT EXISTS customers (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    active BOOLEAN DEFAULT false
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`, (err, res) => {
  if (err) {
    console.log("error: ", err);
    result(null, err);
    return;
  }
});

module.exports = connection;