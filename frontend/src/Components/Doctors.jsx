import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Doctors() {
  const { userID } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.log(error));
  }, []);

  console.log(doctors.image);

  return (
    <div>
      {doctors.map(doctor => (
        <div>
        <div key={doctor.doctorID} className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`http://localhost:9000/doctorImages/${doctor.image}`} className="img-fluid rounded-start" alt={doctor.doctorID} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.special}</p>
                <p className="card-text"><small className="text-body-secondary">{doctor.image}</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
