const bcrypt = require('bcrypt');
const User = require('../Models/user');
const nodemailer = require('nodemailer');

// Create Transporter for sending emails
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use TLS
    secure: false, // Must be false for TLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    },
    connectionTimeout: 10000, // Optional, to prevent fast timeout
    tls: {
        rejectUnauthorized: true // Ensures valid TLS cert
    }
});

// Verify SMTP Connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('SMTP server is ready to take messages');
    }
});

const generatePatientID = () => {
    const prefix = "P";
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${randomPart}`;
  };
  
  exports.createUser = async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .send({ message: 'Email is already registered. Please use a different email.' });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      let patientID;
      let exists = true;
  
      while (exists) {
        patientID = generatePatientID();
        exists = await User.exists({ userID: patientID });
      }
  
      const user = new User({
        ...req.body,
        password: hashedPassword,
        userID: patientID,
      });
  
      await user.save();
      res.status(201).send({ message: 'User registered successfully', userID: user.userID });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send({ message: 'An error occurred while creating the user.' });
    }
  };
  
// Login User
exports.loginUser = async (req, res) => {
    try {
        console.log('Login request received:', req.body);

        const existingUser = await User.findOne({ userID: req.body.userID });
        if (!existingUser) {
            console.log('User not found');
            return res.status(400).send({ message: 'Invalid userID or password.' });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, existingUser.password);
        if (!isPasswordValid) {
            console.log('Invalid password');
            return res.status(400).send({ message: 'Invalid userID or password.' });
        }

        const mailOptions = {
            from: process.env.EMAIL,
            to: existingUser.email,
            subject: 'Login Successful',
            text: `Hi ${existingUser.name},\n\nYou’ve successfully logged into your account.\n\nIf this wasn’t you, please contact support immediately.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).send({
            message: 'Login successful!',
            name: existingUser.name,
            userID: existingUser.userID
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).send({ message: 'An error occurred while logging in.' });
    }
};



exports.deleteUser = async (req,res)=>{
    try{
        const { id } = req.params;
        const deletedUser=await User.findOneAndDelete({id});
        if(!deletedUser)
            {
            return res.status(404).send({ message: 'User not found.' });
            }
        res.status(200).send({ message: 'User deleted successfully.', user: deletedUser });
        }
    catch (error) 
        {
      res.status(500).send({ message: 'An error occurred while deleting the user.' });
        }
  };
  


  exports.getAllUsers = async(req,res)=>{
    try{
        const user = await User.find();
        res.status(200).json(user);
    }
    catch (error){
        res.status(500).json({message: 'Error retriving User',error:error.message});
    }
}


exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).send({ message: 'User not found.' });
      }
      res.status(200).send({ message: 'User updated successfully!', User: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'An error occurred while updating the seller.' });
    }
  };