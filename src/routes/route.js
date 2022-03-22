const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeController');
const internsController = require('../controllers/internController');

//Collage creation
router.post('/functionUp/Colleges', collegeController.createCollege);
//Register for internship
router.post('/functionUp/interns', internsController.createInterns);
//List students applied internship
router.get("/functionup/collegeDetails", internsController.giveAllInterns)

module.exports = router;