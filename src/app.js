const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connect')
const PropertyRouter = require('./routes/property')
const UploadRouter = require('./routes/upload')

const port = process.env.PORT || 5000
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({
		code: 200,
		status: 'success',
		message: 'Welcome to PROPERTY API',
	})
})

app.use('/api/v1/lekki/property', PropertyRouter)
app.use('/api/upload', UploadRouter)

app.use((req, res) => {
	res.status(404).json({
		code: 404,
		status: 'failed',
		message: 'Page not found',
	})
})

app.use((err, req, res, next) => {
	res.status(500).json({
		code: 500,
		status: 'failed',
		message: 'Internal Server Error',
		error: err.message,
	})
})

const bootstrap = async () => {
    try {
        await connectDB; // connect to Database
        app.listen(port, () => {
            `Server is running on port ${port}`
        });
    } catch (error) {
        console.log(error);
    }
};

bootstrap()

module.exports = app
