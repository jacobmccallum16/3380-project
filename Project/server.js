const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

console.log(`__dirname: ${__dirname}`)

app.get('Project/tea.html', (req, res) => {
  console.log("You are here")
  res.sendFile(`${__dirname}/Project/tea.html`)
})

app.listen(3001, () => {
  console.log("Server 3001 is running")
})