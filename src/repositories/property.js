const Property = require('../models/property')

const PropertyRepository = () => {

    const addProperty = async requestBody => {
        const property = await Property.create(requestBody)
        return property
    }

    const getProperties = async () => {
        const properties = await Property.find()
        return properties
    }

    const getFilteredProperties = async query => {
        const properties = await Property.find({ ...query }).exec()
        return properties
    }

    const getProperty = async id => {
        const property = await Property.findById(id)
        return property
    }

    const updateProperty = async (requestBody, id) => {
        const property = await Property.findOneAndUpdate({ id }, { ...requestBody }, { new: true } )
        return property
    }

    return {
        addProperty,
        getProperties,
        getFilteredProperties,
        getProperty,
        updateProperty
    }
}

module.exports = PropertyRepository()
