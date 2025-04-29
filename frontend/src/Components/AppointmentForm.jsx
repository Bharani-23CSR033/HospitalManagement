import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AppointmentForm() {
  const navigate = useNavigate(); // To navigate between pages

  const [formData, setFormData] = useState({
    patientID: "",
    doctorID: "",
    appointmentDate: "",  // Ensure this is correctly named
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/bookAppointment', formData);
      if (response.status === 201) {
        alert("Appointment Scheduled Successfully!");
      }
    } catch (err) {
      console.log("Error occurred: " + err.message);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Schedule Appointment</h2>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientId" className="form-label">Patient ID</label>
            <input
              type="text"
              className="form-control"
              id="patientId"
              name="patientID"  // Ensure this matches the state
              value={formData.patientID}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="doctorId" className="form-label">Doctor ID</label>
            <input
              type="text"
              className="form-control"
              id="doctorId"
              name="doctorID"  // Ensure this matches the state
              value={formData.doctorID}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="appointmentDate" className="form-label">Date and Time</label>
            <input
              type="datetime-local"
              className="form-control"
              id="appointmentDate"
              name="appointmentDate"  // Ensure this matches the state
              value={formData.appointmentDate}  // Bind to the state
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reason" className="form-label">Reason</label>
            <textarea
              className="form-control"
              id="reason"
              name="reason"
              rows="3"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">
            Schedule Appointment
          </button>
        </form>

        <button
          className="btn btn-secondary w-100"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default AppointmentForm;
