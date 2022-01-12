/**
 * @description A function that facilitates the response of a successful request
 * @param {Response} res http response object
 * @param {String} message custom success message
 * @param {Object} data custom success message
 * @param {Number} [status=200] http success status code, defaults to 200
 * @returns {Response} http response with success status and message
*/
 const successResponse = (res, message, data, status = 200) => {
    const resBody = {
        status: 'success', code: status, message, data,
    }

    return res.status(status).json(resBody)
}

/**
 * @description Returns an error response with the given message and status code
 * @param {Response} res http response object
 * @param {String} message custom error message
 * @param {Number} [status=500] http error status
 * @returns {Response} http response with error status and message
 */
const errorResponse = (res, message, status = 500) => {
    let errMessage
    if (message == null) {
        switch (status) {
        case 400:
            errMessage = 'Bad Request'
            break
        case 403:
            errMessage = 'Invalid user access'
            break
        case 404:
            errMessage = 'Page not found'
            break
        case 422:
            errMessage = 'Invalid user input'
            break
        default:
            errMessage = 'Internal server error'
            break
        }
    } else {
        errMessage = message
    }
    return res.status(status).send({ status: 'failed', code: status, message: errMessage })
}

module.exports = {
    successResponse,
    errorResponse
}
