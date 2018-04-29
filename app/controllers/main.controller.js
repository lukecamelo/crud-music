module.exports = {

  showHome: (req, res) => {
    // renders templates. looks in the views folder by default
    res.render('pages/home')
  },

  showCakes: (req, res) => {
    let num = Math.floor(Math.random() * Math.floor(50))
    res.send(`<h1>wassup bitch we got ${num} pancakes right now bless up</h1>`)
  }
}