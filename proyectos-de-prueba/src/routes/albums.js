const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.get('/', albumController.getAllAlbums);
router.get('/:id', albumController.getAlbumById);
router.get('/:id/songs', albumController.getAlbumSongs);

module.exports = router;
