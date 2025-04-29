const express=require('express');
const router=express.Router();

const adminController=require('../Controllers/adminController');

router.post('/adminLogin',adminController.loginAdmin);
router.post('/adminSignUp',adminController.createAdmin);
router.get('/admins',adminController.getAllAdmins);

module.exports = router;