const express = require('express')
const router = express.Router()
const mainController = require('./controllers/main.controller')

module.exports = router

router.get('/', mainController.showHome)
router.get('/pancakezone', mainController.showCakes)