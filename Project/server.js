const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('Project/tea.html', (req, res) => {

})

app.get('/Project/tea.html', (req, res) => {
  res.sendFile(`${__dirname}/Project/tea.html`)
})

app.listen(3001, () => {
  console.log("Server 3001 is running")
})