const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'NewPassword',
  database: 'users_db'
});

module.exports = connection;
