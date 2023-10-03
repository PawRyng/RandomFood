const express = require('express');
const route = express.Router()

const gptController = require('../controllers/ChatGptController')


route.get('/', gptController.get);
route.post('/', gptController.post);

module.exports = route;