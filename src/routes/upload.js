const express = require('express')
const upload = require('../middleware/multer')
const UploadController = require('../controllers/uploadController')
const { successResponse, errorResponse } = require('../utils/response')
const UploadControllerHandler = UploadController(successResponse, errorResponse)

const router = express.Router()

router.post(
    '/', 
    upload,
    (req, res) => {
        UploadControllerHandler.imageUpload(req, res)
    }
)

module.exports = router