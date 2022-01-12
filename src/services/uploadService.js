const { cloudinaryConfig, uploader } = require('../config/cloudinary')

cloudinaryConfig()
const uploadService = async(data, file) => {
    return await uploader.upload(data.content, {
        folder: 'sfc/properties',
        use_filename: true,
        filename_override: file.originalname,
        resource_type: 'auto',
        allowed_formats: ['jpg', 'png', 'jpeg']
    })
}

module.exports = uploadService
