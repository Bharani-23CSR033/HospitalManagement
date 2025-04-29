import React, { useState } from 'react'
import './Styles/DoctorSignUp.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function DoctorLogin() {

    const [doctorID,setDoctorID]=useState('');
    const [password,setPassword]=useState('');
    const navigate =useNavigate();

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            const doctor={doctorID,password};
            const response = await axios.post('http://localhost:9000/doctorLogin',doctor);

            if(response.status===200){
                alert('Login successful!');
            }
        }catch (error) {
            console.error('Error logging in:', error);
        
            if (error.response && error.response.status === 400) {
              alert('Invalid email or password. Please try again.');
            } else {
              alert('An error occurred. Please try again later.');
            }
          }
    }

  return (
    <div className="container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Doctor ID"
                            placeholder="Doctor ID"
                            value={doctorID}
                            onChange={(e)=>{setDoctorID(e.target.value)}}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <Link to="/doctorSignUp">Sign up here</Link></p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button style={{ padding: '5px 10px', fontSize: '14px', width: '100px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '10px', transition: 'all 0.3s', boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)', animation: 'glow 2s infinite' }} onClick={() => navigate(-1)}>Go Back</button>
                </div>
                    </div>
                    </div>
  )
}
