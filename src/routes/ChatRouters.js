const express = require('express');
const route = express.Router()

const gptController = require('../controllers/ChatGptController')

route.get('/', gptController.get);


module.exports = route;