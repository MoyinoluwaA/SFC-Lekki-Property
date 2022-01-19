const UploadController = (successResponse, errorResponse) => {
    
    /** @desc Upload property image
     * @param {object} req - The request object 
     * @param {object} res - The response object 
	 * @route  POST /api/v1/lekki/upload
    */
    const imageUpload = async (req, res, next) => {
        try {
            const { file } = req
            successResponse(res, 'image uploaded successfully', file )
        } catch (error) {
            next(error)
        }
    }
    
    return {
        imageUpload
    }
}

module.exports = UploadController
