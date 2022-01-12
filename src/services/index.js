const PropertyService = require('./propertyService')
const uploadService = require('./uploadService')

const ContainerService = () => {
    return {
        propertyService: PropertyService(),
        uploadService
    }
}

module.exports = ContainerService()