import React from 'react';
import karocall from "../../assets/images/karo_call.png";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="row shadow  ">
        <div className="col-md-5  ps-5 ">
          <img src={karocall} alt="Karo Call" width="20%" />
        </div>
        <div className="col-md-4 pt-2 
">
          <ul className="list-unstyled d-flex justify-content-between mt-2">
         <Link to="/" className='linkk'>   <li className="me-3" style={{fontSize:"1.15rem"}}>Home</li></Link>
            <li className="me-3" style={{fontSize:"1.15rem"}}>Why Us</li>
            
            <li className="nav-item dropdown" style={{fontSize:"1.15rem"}}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li style={{fontSize:"1.15rem"}}>Blog</li>
            <li style={{fontSize:"1.15rem"}}>Join
            </li>
            <li style={{fontSize:"1.15rem"}}>
            Contact Us</li>
          </ul>
         
        </div>
        <div className="col-md-3 shdeule mt-3 text-center   ms-5  p-2"><p >Shedule an apointement</p></div>
      </div>
    </div>
  );
};

export default Header;
