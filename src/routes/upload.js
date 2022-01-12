const express = require('express')
// const upload = require('../middleware/multer')
const UploadController = require('../controllers/uploadController')
const serviceContainer = require('../services')
const { successResponse, errorResponse } = require('../utils/response')
const UploadControllerHandler = UploadController(serviceContainer, successResponse, errorResponse)

const router = express.Router()

router.post(
    '/', 
    // upload.single("image"),
    async (req, res) => {
        UploadControllerHandler.imageUpload(req, res)
    }
)

module.exports = router