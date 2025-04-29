import React, { use, useState } from 'react';
import axios from 'axios';
import './Styles/DoctorSignUp.css';
import {Link,useNavigate} from 'react-router-dom';


export default function DoctorSignup() {

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        special: '',
        email: '',
        password: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('special', formData.special);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('image', formData.image);
    
        // Debug FormData
        for (let [key, value] of data.entries()) {
            console.log(`${key}:`, value);
        }
    
        try {
            const response = await axios.post('http://localhost:9000/doctorSignUp', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error Doctor SignUp:', error.response || error);
            alert(error.response?.data?.message || 'Error Doctor SignUp');
        }
    };
    

    return (
        <div className="container">
            <div className="login-box">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="special"
                            placeholder="Specification"
                            value={formData.special}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">SignUp</button>
                </form>
                <p>Don't have an account? <Link to="/doctorLogin">Sign up here</Link></p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button style={{ padding: '5px 10px', fontSize: '14px', width: '100px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '10px', transition: 'all 0.3s', boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)', animation: 'glow 2s infinite' }} onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
}
