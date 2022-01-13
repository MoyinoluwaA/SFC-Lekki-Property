const PropertyService = require('./propertyService')

const ContainerService = () => {
    return {
        propertyService: PropertyService()
    }
}

module.exports = ContainerService()
