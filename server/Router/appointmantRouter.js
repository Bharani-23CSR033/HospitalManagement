const express=require('express');
const router=express.Router();
const appointmentController=require('../Controllers/appointmentController');

router.post('/bookAppointment',appointmentController.bookAppointment);
router.get('/appointments',appointmentController.getAppointments);
router.get('/appointmentOfDoctor/:id',appointmentController.getAppoByDoctorID);
router.get('/appointmentOfPatient/:id',appointmentController.getAppoByPatientID);
router.delete('/appointment/delete:/id',appointmentController.deleteAppointment);

module.exports = router;