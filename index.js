const express = require('express')
const path = require('path')
const db = require('./models');

const app = express();

// Serve static files from React
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/test', (req,res) => {
  const payload = { text: "Express /api/test endpoint is working" }

  res.json(payload)

  console.log('Sent test payload')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`wat2do backend is now listening on ${port}`))
})
