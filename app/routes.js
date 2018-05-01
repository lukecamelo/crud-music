const express = require('express')
const router = express.Router()
const mainController = require('./controllers/main.controller')
const musicController = require('./controllers/music.controller')

module.exports = router

router.get('/', mainController.showHome)
router.get('/albums', musicController.showAlbums)
router.get('/albums/seed', musicController.seedAlbums)

router.get('/albums/create', musicController.showCreate);
router.post('/albums/create', musicController.processCreate)

router.get('/albums/:slug/edit', musicController.showEdit)
router.post('/albums/:slug', musicController.processEdit)

router.get('/albums/:slug/delete', musicController.deleteAlbum)

router.get('/albums/:slug', musicController.showSingle)
