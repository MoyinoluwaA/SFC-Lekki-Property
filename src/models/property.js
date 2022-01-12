const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PropertySchema = new Schema({
    address: {
        type: String,
        required: true
    },
    type: {
        type: Object,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    sittingRoom: {
        type: Number,
        required: true
    },
    kitchen: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    toilet: {
        type: Number,
        required: true
    },
    propertyOwner: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    validFrom: {
        type: String,
        required: true
    },
    validTo: {
        type: String,
        required: true
    },
    images: {
        type: [],
        required: true
    }
}, { timestamps: true })

const Property = mongoose.model('Property', PropertySchema)
module.exports = Property
