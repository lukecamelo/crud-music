// model
const Album = require('../models/album')

module.exports = {
  showAlbums: (req, res) => {
    // get albums

    res.render('pages/albums', {albums: albums})
  },

  showSingle: (req, res) => {
    const album = {
      name: 'To Pimp A Butterfly',
      slug: 'topimpabutterfly',
      artist: 'Kendrick Lamar',
      rating: 5
    }
    res.render('pages/single', {album: album})
  },
  
  // seed the db
  seedAlbums: (req, res) => {
    // create albums
    const albums = [
      { name: 'To Pimp A Butterfly', artist: 'Kendrick Lamar', rating: 5 },
      { name: 'The Life Of Pablo', artist: 'Kanye West', rating: 3.5 },
      { name: 'Public Strain', artist: 'Women', rating: 4 }
    ]

    for (album of albums) {
      let newAlbum = new Album(album)
      newAlbum.save()
    }

    res.send('db seeded')
  }
}