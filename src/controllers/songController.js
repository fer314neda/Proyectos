const songs = require('../data/songs');
const paginate = require('../utils/pagination');

const getAllSongs = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
  const paginatedResults = paginate(songs, req.query, baseUrl);
  res.json(paginatedResults);
};

const getSongById = (req, res) => {
  const song = songs.find(s => s.id === parseInt(req.params.id));
  if (!song) {
    return res.status(404).json({ error: "Song not found" });
  }
  res.json(song);
};

module.exports = {
  getAllSongs,
  getSongById
};
