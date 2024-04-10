const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
const bcrypt = require('bcrypt')
const session = require('express-session');
const { error } = require('console')
const { dirname } = require('path')

const app = express()
const port = process.env.PORT || 3003;

app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use(session({
  secret: 'session secret',
  resave: false,
  saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));

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

// teas
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

// users
const userSchema = new Schema({
  fullname: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
})
const User = mongoose.model("User", userSchema)

// Quick test route for debugging
app.get('/hi', (req, res) => {
  console.log("hi")
  res.send("hi");
})

// API server
// Using primarily GET and POST requests to simplify develpoment

// Teas
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
app.post('/api/add', async (req, res) => {
  let title = req.body.title
  let type = req.body.type
  let description = req.body.description
  let origin = req.body.origin
  let harvestSeason = req.body.harvestSeason
  let price = Number(req.body.price)
  let quantity = Math.floor(Number(req.body.quantity))
  let image = req.body.image

  // create the new book object
  const newTea = new Tea({
    title, type, description, origin, harvestSeason, price, quantity, image
  })

  await newTea.save()
    .then(() => res.json("Tea added"))
    .catch((err) => res.status(400).json(`Error adding tea ${err}`))
})
app.post('/api/update/:id', async (req, res) => {
  await Tea.findById(req.params.id)
    .then((tea) => {
      tea.title = req.body.title
      tea.type = req.body.type
      tea.description = req.body.description
      tea.origin = req.body.origin
      tea.harvestSeason = req.body.harvestSeason
      tea.price = Number(req.body.price)
      tea.quantity = Math.floor(Number(req.body.quantity))
      tea.image = req.body.image

      tea.save()
        .then(() => res.json(`Tea updated`))
        .catch((err) => res.status(400).json(`Error updating tea ${err}`))
    })
    .catch((err) => res.status(400).json(`Error fetching tea ${err}`))
})
app.post('/api/delete/:id', async (req, res) => {
  Tea.findByIdAndDelete(req.params.id)
    .then(() => res.json("Tea deleted"))
    .catch((err) => res.status(400).json(`Error deleting tea ${err}`))
})

// Users
app.post('/api/register', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			fullname,
			email,
			password: hashedPassword,
		});

		// Save the user to the database
		await newUser.save();
		res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
		res.status(500).json({ message: 'Internal server error' });
  }
})
app.post('/api/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields required.' });
    }
    const user = await User.findOne({ email: email });
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    
    // Password is valid, login successful
    if (isPasswordValid) {
      req.session.userId = user._id;
      console.log(user._id + " is logged in")
      // res.status(200).json({ message: 'Login successful' });
      res.redirect('/tea.html')
    }
  } catch (error) {
    next(error);
  }
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
  // console.log(`Requesting file: ${req.params.file}`)
  // console.log(req)
  let file = `${__dirname}/${req.params.file}`
  console.log(`Serving file:    ${file}`)
  res.sendFile(file)
})

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`)
// })