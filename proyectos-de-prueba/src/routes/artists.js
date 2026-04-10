const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.get('/:id/albums', artistController.getArtistAlbums);
router.get('/:id/songs', artistController.getArtistSongs);

module.exports = router;
