module.exports = {
  showAlbums: (req, res) => {
    const albums = [
      {
        name: 'To Pimp A Butterfly',
        slug: 'topimpabutterfly',
        artist: 'Kendrick Lamar',
        rating: 5
      },
      {
        name: 'The Life Of Pablo',
        slug: 'thelifeofpablo',
        artist: 'Kanye West',
        rating: 3.5
      },
      {
        name: 'Public Strain',
        slug: 'publicstrain',
        artist: 'Women',
        rating: 4
      }
    ]
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
  }
}