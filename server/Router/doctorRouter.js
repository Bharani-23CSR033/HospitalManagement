const express = require('express');
const multer = require('multer');
const DoctorController = require('../Controllers/doctorController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'doctorImages');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/doctorSignUp', upload.single('image'), DoctorController.createUser);
router.post('/doctorLogin',DoctorController.loginDoctor);
router.get('/doctors',DoctorController.getAllDoctors);
router.delete('/doctorDelete/:id',DoctorController.deleteDoctor);
router.get('/doctor/:id',DoctorController.getDoctortByID);

module.exports = router;