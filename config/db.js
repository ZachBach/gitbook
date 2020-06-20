const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  username: 'nzcmccfn72qhr3cv',
  password: 'aayfyishw987qywi',
  database: 'q71io5hpwyg7tpqu',
});

module.exports = connection;
