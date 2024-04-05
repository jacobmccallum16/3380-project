const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')

require('dotenv').config();
// const URI = process.env.MONGODB_URI
const URI = "mongodb+srv://jacob:mango@fullstackproject.pijv5qw.mongodb.net/teaorganic?retryWrites=true&w=majority&appName=fullstackproject"

const app = express()
const port = process.env.PORT || 3003; // MAC might be different for this part??

// Middlewares
app.use(cors())
app.use(express.json())

// const URI = "mongodb://localhost:27017/3380-Project"
// "/teaorganic/teas"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then (() => {
		console.log(`Connected to MongoDB server!!`)
		const server = http.createServer(app)
		server.listen(port, () => {console.log(`HTTP Server is running on port ${port}`)})
		// app.listen(port, () => console.log(`Server is running on port ${port}`))
	})
	.catch((error) => {
		console.log(`Error: connecting to MongoDB ${error.toString()}`)
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

const router = express.Router()
app.use('/api', router)

// GET '/'
router.route('/')
	.get((req, res) => {
		Tea.find()
			.then((teas) => res.json(teas))
			.catch((err) => res.status(400).json("Error Happened"))
	})

// GET '/:id'
router.route('/:id')
	.get((req, res) => {
		Tea.findById(req.params.id)
			.then((tea) => res.json(tea))
			.catch((err) => res.status(400).json(`Error fetching tea ${err}`))
	})

// POST '/add'
router.route('/add')
	.post((req, res) => {
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

		newTea
			.save()
			.then(() => res.json("Tea added"))
			.catch((err) => res.status(400).json(`Error adding tea ${err}`))
	})

// PUT '/update/:id'
router.route('/update/:id')
	.put((req, res) => {
		Tea.findById(req.params.id)
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

// DELETE '/delete/:id'
router.route('/delete/:id')
	.delete((req, res) => {
		Tea.findByIdAndDelete(req.params.id)
			.then(() => res.json("Tea deleted"))
			.catch((err) => res.status(400).json(`Error deleting tea ${err}`))
	})