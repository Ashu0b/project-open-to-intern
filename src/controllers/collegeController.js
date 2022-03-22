const collegeModel = require('../models/collegeModel');

//---------------------------Validation Functions---------------------------------------------------------

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
//----------------------------------------------------------------------------------------------------------
const createCollege = async function (req, res) {
    try {
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide college details' })
        }
        let { name, fullName, logoLink } = req.body

        if (!isValid(name)) {
            res.status(400).send({ status: false, message: `name is required` })
            return
        }

        let Collegedata = await collegeModel.findOne({ name, isDeleted: false })
        if (Collegedata) return res.status(400).send({ status: false, msg: `${name} already exist` })

        if (!isValid(fullName)) {
            res.status(400).send({ status: false, message: `fullName is required` })
            return
        }
        let Collegefullname = await collegeModel.findOne({ fullName, isDeleted: false })
        if (Collegefullname) return res.status(400).send({ status: false, msg: `${fullName} already exist` })

        if (!isValid(logoLink)) {
            res.status(400).send({ status: false, message: `logoLink is required` })
            return
        }
        let CollegeLogo = await collegeModel.findOne({ logoLink, isDeleted: false })
        if (CollegeLogo) return res.status(400).send({ status: false, msg: `${logoLink} already exist` })

        if (!(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(logoLink))) {
            res.status(400).send({ status: false, message: `logoLink is not a valid URL` })
            return
        }

        let createdCollege = await collegeModel.create(req.body)
        res.status(201).send({ status: true, msg: "Collage created Successfully", data: createdCollege })
    }
    catch (err) {
        res.status(500).send({ status: false, data: err.message });
    }
}

module.exports = { createCollege }