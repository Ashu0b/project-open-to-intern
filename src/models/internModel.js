const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: [true, 'Please enter your Mobile number'],
        unique: true,
        trim: true
    },
    collegeId: {
        type: objectId,
        ref: "CollegeDb"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('InternDb', internSchema)