const express = require('express');
const app = express();

const userService = require('./userService');

app.get('/', userService.getUser);

module.exports = app;