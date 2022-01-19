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

				return errorResponse(
					[{
						reason: "bad request",
						message: err.message
					}], 
					res, "Form data key should be file", 400
				)
			}
			if (!req.file) {
				return  errorResponse(
					[{
						reason: "required",
						message: "No File Selected"
					}], 
					res, "No File Selected", 400
				)
			}
			
			next()
		})
	} catch (err) {
		next(err)
	}
}
