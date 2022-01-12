const Joi = require('joi')

const addPropertySchema = {
	schema: Joi.object().keys({
		address: Joi.string().required(),
        type: Joi.string().required(),
        bedroom: Joi.number().required(),
        sittingRoom: Joi.number().required(),
        kitchen: Joi.number().required(),
        bathroom: Joi.number().required(),
        toilet: Joi.number().required(),
        propertyOwner: Joi.string().required(),
        description: Joi.string().required(),
		validFrom: Joi.date().raw().greater('now').required(),
		validTo: Joi.date().raw().min(Joi.ref('validFrom')).required(),
        images: Joi.array().required()
	}),
	message: 'Input error while adding property'
}

const getPropertiesQuerySchema = {
    schema: Joi.object().keys({
        bedroom: Joi.number(),
        sittingRoom: Joi.number(),
        kitchen: Joi.number(),
        bathroom: Joi.number(),
        toilet: Joi.number(),
        propertyOwner: Joi.string()
	}),
	message: 'Input error while getting filtered properties'
}

const propertyIdSchema = {
    schema: Joi.object().keys({
        id: Joi.string()
    }),
    message: 'Invalid id passed as parameter'
}

const updatePropertySchema = {
    schema: Joi.object().keys({
        bedroom: Joi.number(),
        sittingRoom: Joi.number(),
        kitchen: Joi.number(),
        bathroom: Joi.number(),
        toilet: Joi.number(),
        description: Joi.string(),
		validTo: Joi.date().raw()
	}),
	message: 'Input error while updating property'
}

module.exports = {
	addPropertySchema,
    propertyIdSchema,
    getPropertiesQuerySchema,
    updatePropertySchema
}
