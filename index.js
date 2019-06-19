const express = require('express')
const path = require('path')
const db = require('./models');

const app = express();

// Serve static files from React
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/tags', (req,res) => {
  db.Tag.findAll().then(function(tags) {
    res.json({ tags })
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`grafitti backend is now listening on ${port}`))
})
