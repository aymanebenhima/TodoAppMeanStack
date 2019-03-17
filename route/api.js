const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config  = require('../config/database');

const router = express.Router();

const Todo = require('../model/todo');

module.exports = router;