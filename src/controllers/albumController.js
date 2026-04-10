const albums = require('../data/albums');
const songs = require('../data/songs');
const paginate = require('../utils/pagination');

const getAllAlbums = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
  const paginatedResults = paginate(albums, req.query, baseUrl);
  res.json(paginatedResults);
};

const getAlbumById = (req, res) => {
  const album = albums.find(a => a.id === parseInt(req.params.id));
  if (!album) {
    return res.status(404).json({ error: "Album not found" });
  }
  res.json(album);
};

const getAlbumSongs = (req, res) => {
  const albumId = parseInt(req.params.id);
  const albumSongs = songs.filter(s => s.albumId === albumId);
  res.json(albumSongs);
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  getAlbumSongs
};
