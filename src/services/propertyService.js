const propertyRepository = require('../repositories/property')

const PropertyService = () => {
    
    // Create property
    const createProperty = async requestBody => {
        const property = await propertyRepository.addProperty(requestBody)

        if (!property) throw new Error('property could not be created')
        return property
    }

    // Get property
    const getProperty = async id => {
        const property = await propertyRepository.getProperty(id)

        if (!property) throw new Error('property does not exist')
        return property
    }

    // Get all properties
    const getAllProperties = async() => {
        const properties = await propertyRepository.getProperties()

        if (!properties) throw new Error('no properties available')
        return properties
    }

    // Get filtered properties
    const getFilteredProperties = async query => {
        const properties = await propertyRepository.getFilteredProperties(query)
    
        if (!properties) throw new Error('no filtered properties available')
        return properties
    }

    // Get filtered properties
    const updateProperty = async body => {
        const property = await propertyRepository.updateProperty(body)
    
        if (!property) throw new Error('no filtered properties available')
        return property
    }

    return {
        createProperty,
        getProperty,
        getAllProperties,
        getFilteredProperties,
        updateProperty
    }
}


module.exports = PropertyService