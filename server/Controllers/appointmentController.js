const Appointment = require('../Models/appointment');

exports.bookAppointment = async (req, res) => {
  try {
    const { doctorID, patientID, appointmentDate, reason } = req.body;

    if (!doctorID || !patientID || !appointmentDate) {
      console.log("Doctor, Patient, and Date are required.")
      return res.status(400).send({ message: 'Doctor, Patient, and Date are required.' });

    }

    const existing = await Appointment.findOne({
      doctorID,
      appointmentDate: new Date(appointmentDate)
    });

    if (existing) {
      console.log(`Doctor already has an appointment at this time.`)
      return res.status(409).send({ message: 'Doctor already has an appointment at this time.' });
    }

    const appointment = new Appointment({
      doctorID,
      patientID,
      appointmentDate: new Date(appointmentDate),
      reason
    });

    await appointment.save();
    res.status(201).send({ message: 'Appointment booked successfully', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error booking appointment' });
  }
};


exports.getAppointments = async (req,res)=>{
  try{
    const appo=await Appointment.find();
    res.status(200).json(appo);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send({message:'Error Geting appointments'});
  }
}


exports.getAppoByPatientID =async (req,res) => {
    try{

      const {ID}=req.params;
      const appo= await Appointment.find(ID)
      if(!appo)
      {
        console.log("No Appointment found.");
        res.status(202).send({message:'No Appointment found'});
      }
    }
    catch(err)
    {
      console.log(err);
      res.status(500).send({message:'Error Geting appointments'})
    }
}


exports.getAppoByDoctorID =async (req,res) => {
  try{

    const {ID}=req.params;
    const appo= await Appointment.find(ID)
    if(!appo)
    {
      console.log("No Appointment found.");
      res.status(202).send({message:'No Appointment found'});
    }
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send({message:'Error Geting appointments'})
  }
}


exports.deleteAppointment = async (req,res)=>{

  try{
    const ID=req.params;
      const appo=await Appointment.findByIdAndDelete(ID);
      if(!appo)
      {
        res.status(404).send({message:'Appointment Not Found.'});
      }
      res.status(200).send({ message: 'Appointment deleted successfully.', appo:appo });
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send({message:`Error Deleteing appointments`})
  }
}
