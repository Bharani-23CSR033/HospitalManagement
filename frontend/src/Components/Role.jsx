import React from 'react';
import { Link } from 'react-router-dom';

const RoleSelection = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hospital Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Role Selection Section */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center shadow-lg" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h2 className="card-title mb-4">Select Your Role</h2>
            <div className="d-flex flex-column align-items-center">
              <Link
                to="/adminLogin"
                className="btn btn-primary btn-lg w-50 mb-3"
              >
                Admin
              </Link>
              <Link
                to="/doctorLogin"
                className="btn btn-primary btn-lg w-50 mb-3"
              >
                Doctor
              </Link>
              <Link
                to="/userLogin"
                className="btn btn-primary btn-lg w-50 mb-3"
              >
                Patient
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;