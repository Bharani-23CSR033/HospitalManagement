const Doctor = require('../Models/doctors');

exports.createUser = async (req, res) => {
    try {
      console.log('Request body:', req.body);
      console.log('Uploaded file:', req.file);
  
      if (!req.body.name || !req.body.email || !req.body.password || !req.body.special || !req.file) {
        return res.status(400).send({ message: 'All fields are required, including the image.' });
      }
  
      const existingUser = await Doctor.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).send({ message: 'Email already registered. Please use a different email.' });
      }
  
      // ✅ Generate a unique doctorID
      const generateDoctorID = () => {
        const prefix = "D";
        const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${prefix}-${randomPart}`;
      };
  
      let doctorID;
      let exists = true;
  
      while (exists) {
        doctorID = generateDoctorID();
        exists = await Doctor.exists({ doctorID });
      }
  
      const newDoctor = new Doctor({
        name: req.body.name,
        email: req.body.email,
        special: req.body.special,
        doctorID, // ✅ Assigned unique doctorID
        password: req.body.password,
        image: req.file.filename
      });
  
      await newDoctor.save();
      res.status(201).send({ message: 'Doctor registered successfully!' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).send({ message: 'Something went wrong.', error });
    }
  };
  


exports.loginDoctor = async(req,res)=>{
    try{
        const existingUser =await Doctor.findOne({
            doctorID:req.body.doctorID,
            password:req.body.password,
        });
        if(existingUser){
            return res.status(200).send({
                message:'Login successful!',
                name:existingUser.name,
                email:existingUser.email
            })
        }
        else {
            return res.status(400).send({ message: 'Invalid email or password.' });
        }
    }
    catch (error) {
        res.status(500).send({ message: 'An error occurred while logging in.' });
      }
}

exports.getAllDoctors = async(req,res)=>{
    try{
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    }
    catch (error){
        res.status(500).json({message: 'Error retriving Doctors',error:error.message});
    }
}


exports.deleteDoctor = async (req,res)=>{
    try{
        const { id } = req.params;
        const deletedDoctor=await User.findOneAndDelete({id});
        if(!deletedDoctor)
            {
            return res.status(404).send({ message: 'User not found.' });
            }
        res.status(200).send({ message: 'Doctor deleted successfully.', user: deletedDoctor });
        }
    catch (error) 
        {
      res.status(500).send({ message: 'An error occurred while deleting the user.' });
        }
  };


  exports.getDoctortByID =async (req,res) => {
      try{
  
        const {ID}=req.body.doctororID;
        const doc= await Doctor.find(ID)
        if(!doc)
        {
          console.log("No Doctor found.");
          res.status(202).send({message:'No Doctor found'});
        }
      }
      catch(err)
      {
        console.log(err);
        res.status(500).send({message:'Error Geting Doctor'})
      }
  }
  