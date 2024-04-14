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

app.use(cors({
  origin: "https://3380-project.vercel.app/",
  credentials: true,
}))
app.use(express.json())
app.use(express.static('public'));
app.use(session({
  secret: 'session secret',
  resave: false,
  saveUninitialized: true,
  secure: false
}));
app.use(express.urlencoded({ extended: false }));

console.log(`__dirname: ${__dirname}`)

const mongoURI = "mongodb+srv://jacob:mango@fullstackproject.pijv5qw.mongodb.net/teaorganic?retryWrites=true&w=majority&appName=fullstackproject"

console.log('Trying to connect to MongoDB...')
mongoose.connect(mongoURI, {useNewURLParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('...MongoDB connection established successfully!')
    // const server = http.createServer(app)
    // server.listen(port, () => {console.log(`HTTP Server is running on port ${port}`)})
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

// order
// including redundant info because it's easier
const orderSchema = new Schema({
  fullname: { type: String, required: true},
  email: { type: String, required: true},
  productTotal: { type: Number, required: true},
  taxTotal: { type: Number, required: true},
  total: { type: Number, required: true}
})
const Order = mongoose.model("Order", orderSchema)

// Quick test route for debugging
app.get('/hi', (req, res) => {
  console.log("hi")
  res.send("hi");
})

// API server
// Using primarily GET and POST requests to simplify develpoment

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
      req.session.fullname = user.fullname;
      req.session.email = user.email;
      console.log(user._id + " is logged in")
      // res.status(200).json({ message: 'Login successful' });
      res.redirect('/tea.html')
    }
  } catch (error) {
    next(error);
  }
})
// This route is purely for testing the req.session cookie.
// If accessed directly it provides the username and email (while logged in)
// If accessed indirectly it doesn't provide the username or email (even if logged in)
// I don't understand why this is happening
app.get('/api/session', async (req, res) => {
  console.log('/api/session')
  console.log(req.session)
  console.log(`req.session ${JSON.stringify(req.session)}`)
  res.json(req.session)
})
// I don't get why this never works
app.get('/api/username', (req, res) => {
  console.log(`req.session ${JSON.stringify(req.session)}`)
  let session = JSON.stringify(req.session)
  console.log(session)
  if (JSON.stringify(req.session.fullname) != undefined) {
    console.log(`req.session.fullname: ${req.session.fullname}`)
    console.log(`req.session.fullname ${JSON.stringify(req.session.fullname)}`)
    // res.send(`{ "fullname": ${JSON.stringify(req.session.fullname)} }`)
    console.log('success')
    res.send(`{ "fullname": "Jacob" }`)
  } else {
    console.log('error')
    res.send(`{ "fullname": "-" }`)
  }
})
// Orders
app.post('/api/orders/checkout', async (req, res) => {
  console.log("hii")
  let { fullname, email } = req.session;
  let { productTotal, taxTotal, total } = req.body;
  console.log(req.body)
  console.log(req.session)
  let newOrder = await new Order({
    fullname, email, productTotal, taxTotal, total
  })
  console.log(newOrder)
  newOrder.save()
    .then(() => res.redirect('/orderPlaced.html'))
    .catch(() => res.redirect('/orderSum.html')) // real customers would think this was super sketchy lol
})

//logout
app.post('/api/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    // Return success response
    res.clearCookie('connect.sid'); // Clear session cookie
    res.status(200).json({ message: 'Logout successful' });
  });
});

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
app.get('/api/tea/search/:searchTerm' , async (req, res) => {
  let searchTerm = req.params.searchTerm.toLowerCase()
  const teas = await Tea.find();
  try {
    // const filteredTeas = teas.filter(tea => tea.title.toLowerCase().includes(searchTerm));
    const filteredTeas = teas.filter(tea => JSON.stringify(tea).toLowerCase().includes(searchTerm));
    // console.log(filteredTeas)
    res.json(filteredTeas)
  } catch {
    res.status(400).json(`Error`)
  }
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

// Basic file server
// Some of this should be modified if we have time
app.get('/' , (req, res) => {res.sendFile(`${__dirname}/tea.html`)})
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
// Specific routes for vercel
app.get('/about.html', (req, res) => {res.sendFile(`${__dirname}/about.html`)})
app.get('/about.js', (req, res) => {res.sendFile(`${__dirname}/about.js`)})
app.get('/cart.html', (req, res) => {res.sendFile(`${__dirname}/cart.html`)})
app.get('/cart.js', (req, res) => {res.sendFile(`${__dirname}/cart.js`)})
app.get('/detail.html', (req, res) => {res.sendFile(`${__dirname}/detail.html`)})
app.get('/detail.js', (req, res) => {res.sendFile(`${__dirname}/detail.js`)})
app.get('/home.html', (req, res) => {res.sendFile(`${__dirname}/home.html`)})
app.get('/home.js', (req, res) => {res.sendFile(`${__dirname}/home.js`)})
app.get('/login.html', (req, res) => {res.sendFile(`${__dirname}/login.html`)})
app.get('/login.js', (req, res) => {res.sendFile(`${__dirname}/login.js`)})
app.get('/orderPlaced.html', (req, res) => {res.sendFile(`${__dirname}/orderPlaced.html`)})
app.get('/orderPlaced.js', (req, res) => {res.sendFile(`${__dirname}/orderPlaced.js`)})
app.get('/orderSum.html', (req, res) => {res.sendFile(`${__dirname}/orderSum.html`)})
app.get('/orderSum.js', (req, res) => {res.sendFile(`${__dirname}/orderSum.js`)})
app.get('/profile.html', (req, res) => {res.sendFile(`${__dirname}/profile.html`)})
app.get('/profile.js', (req, res) => {res.sendFile(`${__dirname}/profile.js`)})
app.get('/signup.html', (req, res) => {res.sendFile(`${__dirname}/signup.html`)})
app.get('/signup.js', (req, res) => {res.sendFile(`${__dirname}/signup.js`)})
app.get('/tea.html', (req, res) => {res.sendFile(`${__dirname}/tea.html`)})
app.get('/tea.js', (req, res) => {res.sendFile(`${__dirname}/tea.js`)})
// Generic routes for Google Cloud and localhost
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

module.exports = app;