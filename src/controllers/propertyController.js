
const PropertyController = (serviceContainer, successResponse, errorResponse) => {

	/** @desc Add a property
     * @param {object} req - The request object 
     * @param {object} res - The response object 
	 * @route  GET /api/properties/add
    */
	const addProperty = async(req, res) => {
		try {
			const property = await serviceContainer.propertyService.createProperty(req.body)
            successResponse(res, 'Property added successfully', property, 201)
	
		} catch (error) {
            errorResponse(res, error.message, 404)
		}
	}

	/** @desc Get property by id
     * @param {object} req - The request object 
     * @param {object} res - The response object 
	 * @route  GET /api/properties:id
    */
	 const getProperty = async (req, res) => {
		try {
			const { params: { id }} = req

			const property = await serviceContainer.propertyService.getProperty(id)
			successResponse(res, `Fetched property with id: ${id}`, property)
		} catch (error) {
			errorResponse(res, error.message, 404)
		}
	}

	/** @desc Get all properties and filtered properties
     * @param {object} req - The request object 
     * @param {object} res - The response object 
	 * @route  GET /api/properties
    */
	const getProperties = async (req, res) => {
		try {
			let properties, message

			if (req.query === undefined || Object.keys(req.query).length === 0) {
				properties = await serviceContainer.propertyService.getAllProperties()
				message = 'Fetched all properties'
			} else {
				properties = await serviceContainer.propertyService.getFilteredProperties(req.query)
				message = 'Fetched filtered properties'
			}

			successResponse(res, message, properties)
		} catch (error) {
			errorResponse(res, error.message, 404)
		}
	}

	/** @desc Update a property
     * @param {object} req - The request object 
     * @param {object} res - The response object 
	 * @route  PATCH /api/properties
    */
	const updateProperty = async (req, res) => {
		try {
			const { body, params: { id } } = req

			const property = await serviceContainer.propertyService.updateProperty(body, id)
            successResponse(res, `Property with id: ${id} updated successfully`, property)
		} catch (error) {
			errorResponse(res, error.message, 404)
		}
	}

	return {
		addProperty,
		getProperty,
		getProperties,
		updateProperty
	}
}


module.exports = PropertyController
