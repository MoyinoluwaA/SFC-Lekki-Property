const { errorResponse } = require("../utils/response")

/**
   * @description Used to validate req body, params, query and headers to
   *  ensure the required fields are filled and are of the right data type
   */
 const validateInput = (data, type) => async (req, res, next) => {
	try {
		const getType = {
			body: req.body,
			params: req.params,
			query: req.query,
			headers: req.headers,
		}

		const options = { language: { key: '{{key}} ' } }
		const result = getType[type]

		const isValid = await data.schema.validate(result, options)

		if (!isValid.error) {
			req[type] = isValid.value
			return next()
		}

		const { message } = isValid.error.details[0]

		errorResponse(
			[{
				reason: 'required',
				message: message.replace(/[\"]/gi, ''),
				locationType: type,
			}], 
			res, message.replace(/[\"]/gi, ''), 400
		)
	} catch (err) {
		next(err)
	}
}

module.exports = validateInput
