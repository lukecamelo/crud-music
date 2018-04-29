module.exports = {
  showAlbums: (req, res) => {
    const albums = [
      {
        name: 'To Pimp A Butterfly',
        slug: 'topimpabutterfly',
        artist: 'Kendrick Lamar'
      },
      {
        name: 'The Life Of Pablo',
        slug: 'thelifeofpablo',
        artist: 'Kanye West'
      },
      {
        name: 'Public Strain',
        slug: 'publicstrain',
        artist: 'Women'
      }
    ]

    res.render('pages/albums', {albums: albums})
  }
}