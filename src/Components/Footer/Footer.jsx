import React from 'react';
import karocall from "../../assets/images/karo_call.png";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



import "./Footer.css"


const Footer = () => {
  return (
   
    
    <div className='row   d-flex justify-content-between '>
      
       <div className="col-md-1"></div>
      <div className="col-md-4 p-5 first-div  ">
        <div className=''>
          <div className='bg-white w-25   rounded-3'>
            <img src={karocall} alt="" width="130%" height="80vh"  className='logo-image'/>
          </div>

          <p className='text-white mt-2' style={{ fontSize: "1.05rem" }}>Choose our experts for trustworthy equipment installation, maintenance, repair services, and removal in all your fitness centers. We make safety and customer satisfaction our priority to give a worry-free process for all your workout needs.</p>
        </div>
      </div>
      <div className="col-md-3 pt-4 ms-3  text-white">
        <div className='mt-4 pt-3 '><h5 className=''>Contact Us</h5></div>
        <div className='d-flex mt-3 '>

          <div className='mt-3'>
            <IoLocation className='footer-icon fs-4 ' />
          </div>
          <div>  <p className=' pt-1 ms-1 mt-2 ' style={{ fontSize: "1.00rem" }}> <span>Door N0.8 2-684,#103,# A & B, 1ST Floor,MAYAFAIR
            GARDENS, Besides Ohilr's Restaurant,Rd NO.12,
            Banjara Hills,Hydrabad-500034, Telanagana
          </span></p> </div></div>

        <div className='d-flex '>

          <div className=''>
            <FaPhoneAlt className='footer-icon  ' />
          </div>
          <div>  <p className='  ms-3 ' style={{ fontSize: "1.04rem" }}> <span>
            +91 77135 84076
          </span></p> </div>
          
          
          <div className=''>
            < CgMail  className='footer-icon fs-4 ms-3  ' />
          </div>
          <div>  <p className='  ms-1 ' style={{ fontSize: "1.04rem" }}> <span>
          contact@unift.in
          </span></p> </div>
          
          </div>

      </div>

      <div className="col-md-3 ms-5 text-white text-center mt-5 pb-3 ">
        <h5 className=' me-5 pe-5 text-white mt-3'>Follow Us
        </h5>
        {/* <div className='mt-4'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi maxime sit soluta odit, cumque tenetur ipsam quidem doloribus molestiae?</p></div> */}
       <div className=' ms-5 mt-3 '>
          <div className='d-flex mt-2'><div className='bgfblue ms-3'><FaFacebookF /> </div> <div className='ms-3'><h5 className='facebook'>facebook</h5></div></div>
          <div className='d-flex mt-3'>
            
        <div className='bginstagram ms-3 ' ><FaInstagram  className='fs-4'/></div> <div><h5 className='ms-3 instagram'>Instagram</h5></div>
          </div>
        <div className='d-flex mt-3 ms-1'>
        <div className='bgyred ms-3  ' ><ImYoutube  className='bg-danger'/></div>
        <div>
          <p className='ms-3 youtube' style={{fontSize:"1.05rem"}}>Youtube</p>
        </div>
        </div>

       <div className='d-flex mt-2 '> <div className='bglblue ms-4 ' ><FaLinkedinIn /></div> <div><h5 className='ms-3 lindin'>Linkdin</h5></div> </div>
        </div>

      </div>
      <div className="col-md-12 p-1  bg-dark mt-2 pt-3   ">
       <div className="row">
        <div className="col-md-1"></div>
        <div className='col-md-7   firstsecond-div'> <p className='text-white' style={{fontSize:"1.05rem"}}>Copyright  © 2025 karo Call Service. All Right Reserved.</p></div>
        <div className='text-white col-md-3 text-center ms-5 ps-5\ designed-by'><p  style={{fontSize:"1.05rem"}}>Designed By- Inext Software Solutions</p></div>
       </div>
      </div>

    </div>
    
    
  )
}

export default Footer