const UploadController = (serviceContainer, successResponse, errorResponse) => {
    
    const imageUpload = async (req, res, next) => {
        try {
            const { file } = req
            console.log(file);
            
            // const {
            //     public_id, format, original_filename, url, secure_url,
            // } = await serviceContainer.uploadService(data, file)
    
            // successResponse(
            //     res,
            //     'File uploaded successfully',
            //     {
            //         public_id, format, original_filename, url, secure_url,
            //     }
            // )
        } catch (error) {
            console.log(error);
        }
    }
    
    return {
        imageUpload
    }
}

module.exports = UploadController
