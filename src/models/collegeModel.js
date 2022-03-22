const mongoose = require('mongoose');

const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true,
        trim: true
    },
    fullName: {
        type: String,
        required: [true, 'fullname is required'],
        trim: true
    },
    logoLink: {
        type: String,
        required: [true, 'logolink is required'],
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

module.exports = mongoose.model('CollegeDb', collageSchema)