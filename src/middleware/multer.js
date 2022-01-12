// const multer = require('multer')
// const DataURI = require('datauri')
// const path = require('path')
// const { errorResponse } = require('../utils/response')

// // ----Filter File---
// const imageFilter = (req, file, cb) => {
// 	// Allowed ext
// 	const filetypes = /jpeg|jpg|png|pdf|doc|docx/
// 	// Check ext
// 	const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
// 	// Check mime
// 	const mimefile = filetypes.test(file.mimetype)

// 	if (!mimefile && !extname) {
// 		return cb('upload files of type .jpeg, .jpg, .png, pdf, doc and docx only')
// 	}
// 	return cb(null, true)
// }

// const dataURI = new DataURI()
// // -----Temporary storage-----
// const storage = multer.memoryStorage({})

// const upload = multer({
// 	storage,
// 	limits: { fileSize: 500000 },
// 	fileFilter: imageFilter,
// }).single('file')

// const dataUri = (image) => dataURI.format(
// 	path.extname(image.originalname).toString(),
// 	image.buffer,
// )

// // catch possible errors
// module.exports = (req, res, next) => {
// 	try {
// 		upload(req, res, (err) => {
// 			if (err) {
// 				// instanceof multer.MulterError
// 				if (err.code === 'LIMIT_FILE_SIZE') {
// 					// eslint-disable-next-line no-param-reassign
// 					err = 'file size is too large. allowed file size is 500KB'
// 				}
// 				return errorResponse(res, err)
// 			}
// 			if (!req.file) {
// 				return errorResponse(res, 'No File Selected', 400)
// 			}
// 			req.data = dataUri(req.file)
// 			next()
// 		})
// 	} catch (err) {
// 		next(err)
// 	}
// }