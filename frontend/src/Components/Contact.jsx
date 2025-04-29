import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand fs-3 fw-bold">🏥 Hospital Management System</span>
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/role">Role</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Page Content */}
      <section className="container my-5 pt-5 flex-grow-1 text-center">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <p>Email: support@hospital.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Health St, Wellness City, HC 56789</p>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p>&copy; {new Date().getFullYear()} Hospital Management System. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a> | 
          <a href="/terms" className="text-light text-decoration-none"> Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Contact;