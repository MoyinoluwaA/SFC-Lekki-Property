const { DateTime } = require('luxon')

/**
 * @description A middleware function that logs request to endpoint
 * @param {object} req - The request object 
 * @param {object} res - The response object 
 * @param {function} next - The next function
*/
module.exports = (req, res, next) => {
    const { method, url } = req

    const start = DateTime.local()
    res.on('close', () => {
        let log = `[${method}: ${url}]: Finished with ${res.statusCode} response in ${DateTime.local().diff(start, 'milliseconds').milliseconds} ms`
        console.log(log)
    })

    next()
}