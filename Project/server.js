const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
const { error } = require('console')
const { dirname } = require('path')

const app = express()
const port = process.env.PORT || 3003;

app.use(cors())
app.use(express.json())
app.use(express.static('public'));

console.log(`__dirname: ${__dirname}`)

const mongoURI = "mongodb+srv://jacob:mango@fullstackproject.pijv5qw.mongodb.net/teaorganic?retryWrites=true&w=majority&appName=fullstackproject"

console.log('Trying to connect to MongoDB...')
mongoose.connect(mongoURI, {useNewURLParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('...MongoDB connection established successfully!')
    const server = http.createServer(app)
    server.listen(port, () => {console.log(`HTTP Server is running on port ${port}`)})
  })
  .catch((error) => {
		console.log(`...error connecting to MongoDB: ${error.toString()}`)
	})

const Schema = mongoose.Schema

const teaSchema = new Schema({
	title: {type: String, required: true},
	type: {type: String, required: true},
	description: {type: String, required: true},
	origin: {type: String, required: true},
	harvestSeason: {type: String},
	price: {type: Number, required: true},
	quantity: {type: Number, required: true},
	image: {type: String, required: true}
})

const Tea = mongoose.model("Tea", teaSchema)

// Quick test route for debugging
app.get('/hi', (req, res) => {
  console.log("hi")
  res.send("hi");
})

// API server
// Using primarily GET and POST requests to simplify develpoment
app.get('/api/', async (req, res) => {
  // console.log('API request')
  await Tea.find()
    .then((teas) => res.json(teas))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})
app.get('/api/:id', async (req, res) => {
  Tea.findById(req.params.id)
    .then((tea) => res.json(tea))
    .catch((err) => res.status(400).json(`Error fetch tea: ${err}`))
})

// Basic file server
// Some of this should be modified if we have time
app.get('/' , (req, res) => {
  res.sendFile(`${__dirname}/tea.html`)
})
app.get('/css/:file', (req, res) => {
  // console.log(`Requesting CSS file at ${req.params.file}`)
  let file = `${__dirname}/css/${req.params.file}`
  // console.log(`trying to server file: ${file}`)
  res.sendFile(file)
})
app.get('/js/:file', (req, res) => {
  // console.log(`Requesting JS file at ${req.params.file}`)
  let file = `${__dirname}/js/${req.params.file}`
  // console.log(`trying to server file: ${file}`)
  res.sendFile(file)
})
app.get('/public/:directory/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/${req.params.directory}/${req.params.file}`)
})
app.get('/public/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/${req.params.file}`)
})
app.get('/:file', (req, res) => {
  console.log(`Requesting file at ${req.params.file}`)
  // console.log(req)
  let file = `${__dirname}/${req.params.file}`
  console.log(`trying to server file: ${file}`)
  res.sendFile(file)
})

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`)
// })