import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
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
                <Link className="nav-link" to="/role">Role</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointment">Appointment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container-fluid text-center my-5 pt-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Placeholder" />
            <h2>Patient Care</h2>
            <p>Providing top-notch medical care and patient services with compassion and professionalism.</p>
            <button className="btn btn-secondary">View details »</button>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Placeholder" />
            <h2>Emergency Services</h2>
            <p>24/7 emergency response with well-equipped ambulances and specialized medical teams.</p>
            <button className="btn btn-secondary">View details »</button>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Placeholder" />
            <h2>Advanced Facilities</h2>
            <p>State-of-the-art medical equipment and facilities for accurate diagnosis and treatment.</p>
            <button className="btn btn-secondary">View details »</button>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light text-center py-3 mt-auto w-100"
        style={{ width: "100vw", position: "relative", left: 0, bottom: 0 }}>
  <p>&copy; {new Date().getFullYear()} Hospital Management System. All Rights Reserved.</p>
  <p>
    <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a> | 
    <a href="/terms" className="text-light text-decoration-none"> Terms of Service</a>
  </p>
</footer>

    </div>
  );
};

export default Navbar;
