import React from 'react';
import karocall from "../../assets/images/karo_call.png";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => { 
  return (
    <div>
      <div className="row shadow">
        <div className="col-md-5">
          <div className='image-div ms-5'>
            <img src={karocall} alt="Karo Call" id='logo-img' className='pb-5'/>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          {/* Navbar for larger screens */}
          <div className="d-none d-md-block">
            <ul className="list-unstyled d-flex justify-content-between">
              <Link to="/" className='linkk'>
                <li className="me-3" style={{ fontSize: "1.15rem" }}>Home</li>
              </Link>
              <li className="me-3" style={{ fontSize: "1.15rem" }}>Why Us</li>

              <li className="nav-item dropdown" style={{ fontSize: "1.15rem" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Raipur</a></li>
                </ul>
              </li>
              <li style={{ fontSize: "1.15rem" }}>Blog</li>
              <li style={{ fontSize: "1.15rem" }}>Join</li>
              <li style={{ fontSize: "1.15rem" }}>Contact Us</li>
            </ul>
          </div>

          {/* Navbar for mobile screens */}
          <div className="d-md-none">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Why Us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Raipur</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Join</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="col-md-3 shdeule  mt-3 text-center hover-element ms-5 p-2">
          <p>Schedule an appointment</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
