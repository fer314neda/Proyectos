const artists = require('../data/artists');
const albums = require('../data/albums');
const songs = require('../data/songs');
const paginate = require('../utils/pagination');

const getAllArtists = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
  const paginatedResults = paginate(artists, req.query, baseUrl);
  res.json(paginatedResults);
};

const getArtistById = (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id));
  if (!artist) {
    return res.status(404).json({ error: "Artist not found" });
  }
  res.json(artist);
};

const getArtistAlbums = (req, res) => {
  const artistId = parseInt(req.params.id);
  const artistAlbums = albums.filter(a => a.artistId === artistId);
  res.json(artistAlbums);
};

const getArtistSongs = (req, res) => {
  const artistId = parseInt(req.params.id);
  const artistSongs = songs.filter(s => s.artistId === artistId);
  res.json(artistSongs);
};

module.exports = {
  getAllArtists,
  getArtistById,
  getArtistAlbums,
  getArtistSongs
};
