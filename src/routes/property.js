const express = require('express')
const PropertyController = require('../controllers/propertyController')
const validateInput = require('../middleware/validation')
const { 
    addPropertySchema, updatePropertySchema, getPropertiesQuerySchema, propertyIdSchema 
} = require('../schemas/properties')
const serviceContainer = require('../services')
const { successResponse, errorResponse } = require('../utils/response')
const PropertyControllerHandler = PropertyController(serviceContainer, successResponse, errorResponse)

const router = express.Router()

router.post(
    '/', 
    validateInput(addPropertySchema, 'body'),
    (req, res) => {
        PropertyControllerHandler.addProperty(req, res)
    }
)

router.get(
    '/:id', 
    validateInput(propertyIdSchema, 'params'),
    (req, res) => {
        PropertyControllerHandler.getProperty(req, res)
    }
)

router.get(
    '/', 
    validateInput(getPropertiesQuerySchema, 'query'),
    (req, res) => {
        PropertyControllerHandler.getProperties(req, res)
    }
)

router.patch(
    '/:id',
    validateInput(updatePropertySchema, 'body'),
    (req, res) => {
        PropertyControllerHandler.updateProperty(req, res)
    }
)

module.exports = router
