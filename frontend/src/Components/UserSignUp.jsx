import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                name, email, password
            };
            const response = await axios.post('http://localhost:9000/signUpUser', user);
            if (response) {
                alert(`SignUp successful! and Your ID is ${response.data.userID}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);

            if (error.response && error.response.status === 400) {
                alert('Invalid email or password. Please try again.');
            } else {
                alert('An error occurred. Please try again later.');
            }
        }
    };
    useEffect(()=>{
        console.log(name)
    },[name])

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
                            value={name}
                            onChange={(e) => { setName(e.target.value); }}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                            required
                        />
                    </div>
                    <button type="submit">SignUp</button>
                </form>
                <p>Already have an account? <Link to="/userLogin">Login here</Link></p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button style={{ padding: '5px 10px', fontSize: '14px', width: '100px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '10px', transition: 'all 0.3s', boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)', animation: 'glow 2s infinite' }} onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    );
}