const mongoose = require('mongoose');
const validator = require('validator');

// creating a schema

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true,
    },

    titleOfProject: {
        type: String,
        required: false,
        trim: true,
    },

    description: {
        type: String,
        trim: true,
        required:true,   
    },

    email: {
        type: String,
        trim: true,
        required: false,
        // unique: true,
        lowercase: true,

        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Enter a valid email')
            }
        }
    },

    phone: {
        type: String,
        trim: true,
        // unique: true
    }
})

const NancyData = mongoose.model('NancyDatum', dataSchema )

// exporting the model
module.exports = NancyData;