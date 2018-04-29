// model
const Album = require('../models/album')

module.exports = {  
  showAlbums: showAlbums,
  showSingle: showSingle,
  seedAlbums: seedAlbums
}

function showAlbums(req, res) {
  // get albums
  Album.find({}, (err, albums) => {
    if (err) {
      res.status(404);
      res.send('Albums not found! not found!');
  }

    res.render('pages/albums', {albums: albums})
  })
  
}

function showSingle(req, res) {
  const album = {
    name: 'To Pimp A Butterfly',
    slug: 'topimpabutterfly',
    artist: 'Kendrick Lamar',
    rating: 5
  }
  res.render('pages/single', {album: album})
}

// seed the db
function seedAlbums(req, res) {
  // create albums
  const albums = [
    { name: 'To Pimp A Butterfly', artist: 'Kendrick Lamar', rating: 5 },
    { name: 'The Life Of Pablo', artist: 'Kanye West', rating: 3.5 },
    { name: 'Public Strain', artist: 'Women', rating: 4 },
    { name: 'Donuts', artist: 'J Dilla', rating: 5 }
  ]

  Album.remove({}, () => {
    for (album of albums) {
      let newAlbum = new Album(album)
      newAlbum.save()
    }
  })

  res.send('db seeded')
}