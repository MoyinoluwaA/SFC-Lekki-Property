const UploadController = (successResponse, errorResponse) => {
    
    const imageUpload = async (req, res) => {
        try {
            const { file } = req
            successResponse(res, 'image uploaded successfully', file )
        } catch (error) {
            errorResponse(res, error.message)
        }
    }
    
    return {
        imageUpload
    }
}

module.exports = UploadController
