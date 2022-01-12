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

    // Update property
    const updateProperty = async(body, id) => {
        const isProperty = await getProperty(id)
        
        if (isProperty) {
            const property = await propertyRepository.updateProperty(body, id)
        
            if (!property) throw new Error('property could not be updated')
            return property
        }
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
