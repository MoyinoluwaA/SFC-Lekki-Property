const UploadController = (serviceContainer, successResponse, errorResponse) => {
    
    const imageUpload = async (req, res, next) => {
        try {
            const { data, file } = req
            
            const {
                public_id, format, original_filename, url, secure_url,
            } = await serviceContainer.uploadService(data, file)
    
            successResponse(
                res,
                'File uploaded successfully',
                {
                    public_id, format, original_filename, url, secure_url,
                }
            )
        } catch (err) {
            next(err)
        }
    }
    
    return {
        imageUpload
    }
}

module.exports = UploadController
