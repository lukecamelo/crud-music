const mongoose = require('mongoose'),
  Schema = mongoose.Schema

// schema
const albumSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  artist: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  }
})

// middleware
// ensures the slug is created from album title
albumSchema.pre('save', function(next) {
  this.slug = slugify(this.name)
  next()
})

// model
const albumModel = mongoose.model('Album', albumSchema)
  
 // export
module.exports = albumModel

// slugify baby

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}