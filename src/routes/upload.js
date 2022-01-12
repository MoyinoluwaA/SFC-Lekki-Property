const express = require('express')
const multer = require('../middleware/multer')
const UploadController = require('../controllers/uploadController')
const serviceContainer = require('../services')
const { successResponse, errorResponse } = require('../utils/response')
const UploadControllerHandler = UploadController(serviceContainer, successResponse, errorResponse)

const router = express.Router()

// router.post(
//     '/', 
//     multer,
//     (req, res) => {
//         UploadControllerHandler.imageUpload(req, res)
//     }
// )

module.exports = router