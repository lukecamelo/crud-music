// model
const Album = require('../models/album')

module.exports = {  
  showAlbums: showAlbums,
  showSingle: showSingle,
  seedAlbums: seedAlbums,
  showCreate: showCreate,
  processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit,
  deleteAlbum: deleteAlbum
}

function showAlbums(req, res) {
  // get albums
  Album.find({}, (err, albums) => {
    if (err) {
      res.status(404);
      res.send('Albums not found! not found!');
  }

    res.render('pages/albums', {
      albums: albums,
      success: req.flash('success')
    })
  })
}

function showSingle(req, res) {
  // get a single album
  Album.findOne({ slug: req.params.slug }, (err, album) => {
    if (err) {
      res.status(404);
      res.send('album not found!');
    }

    res.render('pages/single', { 
      album: album,
      success: req.flash('success')
    })

    res.render('pages/single', { album: album });
  });
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

function showCreate(req, res) {
  res.render('pages/create', {
    errors: req.flash('errors')
  })
}

function processCreate(req, res) {

  req.checkBody('name', 'Title is required.').notEmpty()
  req.checkBody('artist', 'Artist\'s name is required.').notEmpty()
  req.checkBody('rating', 'Rating is required.').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    req.flash('errors', errors.map(err => err.msg))
    return res.redirect('/albums/create')
  }

  // create a new album
  const album = new Album({
    name: req.body.name,
    artist: req.body.artist,
    rating: req.body.rating
  });

  // save album
  album.save((err) => {
    if (err)
    throw err;

    req.flash('success', 'Successfully added album!')
   // redirect to the newly created album
    res.redirect(`/albums/${album.slug}`);
  });
}

function showEdit(req, res) {
  Album.findOne({ slug: req.params.slug}, (err, album) => {
    res.render('pages/edit', {
      album: album,
      errors: req.flash('errors')
    })
  })
}

function processEdit(req, res) {
  req.checkBody('name', 'Title is required.').notEmpty()
  req.checkBody('artist', 'Artist\'s name is required.').notEmpty()
  req.checkBody('rating', 'Rating is required.').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    req.flash('errors', errors.map(err => err.msg))
    return res.redirect(`/albums/${req.params.slug}/edit`)
  }

  Album.findOne({ slug: req.params.slug}, (err, album) => {
    album.name = req.body.name
    album.artist = req.body.artist
    album.rating = req.body.rating

    album.save((err) => {
      if(err)
        throw err

      req.flash('success', 'Successfully edited entry.')
      res.redirect('/albums')
    })
  })
}

function deleteAlbum(req, res) {
  Album.remove({ slug: req.params.slug }, (err) => {
    req.flash('success', 'Album has been deleted.')
    res.redirect('/albums')
  })
}