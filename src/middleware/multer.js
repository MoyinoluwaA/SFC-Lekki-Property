const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const path = require('path')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { errorResponse } = require('../utils/response');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'sfc/lekki'
    }
})

const upload = multer({ 
    storage: storage, 
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("Unsupported file type!"), false);
            return;
        }
        cb(null, true);
    }, 
}).single("file")

// catch possible errors
module.exports = (req, res, next) => {
	try {
		upload(req, res, (err) => {
			if (err) {
				// instanceof multer.MulterError
				if (err.code === 'LIMIT_FILE_SIZE') {
					err = 'file size is too large. allowed file size is 500KB'
				}
				return errorResponse(res, err, 400)
			}
			if (!req.file) {
				return errorResponse(res, 'No File Selected', 400)
			}
			
			next()
		})
	} catch (err) {
		next(err)
	}
}
