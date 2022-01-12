const cloudinary = require('../config/cloudinary')

const uploadService = async(file) => {
    return await cloudinary.uploader.upload(file.path, {
        folder: 'sfc/properties',
        use_filename: true,
        filename_override: file.originalname,
        resource_type: 'auto',
        allowed_formats: ['jpg', 'png', 'jpeg']
    })
}

module.exports = uploadService
