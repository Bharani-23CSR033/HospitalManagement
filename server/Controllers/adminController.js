const Admin=require('../Models/admin');


exports.loginAdmin = async(req,res)=>{
    try{
        const existingAdmin =await Admin.findOne({
            adminID:req.body.adminID,
            password:req.body.password,
        });
        if(existingAdmin){
            return res.status(200).send({
                message:'Login successful!',
                name:existingAdmin.name,
            })
        }
        else {
            return res.status(400).send({ message: 'Invalid ID or password.' });
        }
    }
    catch (error) {
        res.status(500).send({ message: 'An error occurred while logging in.' });
      }
}


exports.createAdmin = async (req, res) => {
    try {
      const existingAdmin = await Admin.findOne({ email: req.body.email });
      if (existingAdmin) {
        return res.status(400).send({ message: 'Email is already registered. Please use a different email.' });
      }
      const user = new Admin(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send({ message: 'An error occurred while creating the Admin.' });
    }
  };



  exports.getAllAdmins = async(req,res)=>{
    try{
        const admins = await Admin.find();
        res.status(200).json(admins);
    }
    catch (error){
        res.status(500).json({message: 'Error retriving Admins',error:error.message});
    }
}

