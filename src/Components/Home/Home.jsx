import React from 'react';
import Header from "../Header/Header.jsx";
import "./Home.css";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { RiCarWashingFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { TbDeviceCctvFilled } from "react-icons/tb";
import { FaLaptop } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
 import Footer from '../Footer/Footer.jsx';


const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12  ">
          <Header />
        </div>

        <div className="col-md-12 m-0 p-0">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active img-div">
                <img
                  src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "500px" }}
                />
                <div className="text">
                  <h1 className="text-center">
                    Build your home KaroCall
                  </h1>
                  <h5 className="text-center mt-4 mt-4">
                    Experience satisfied repair and maintenance with our
                    dedicated team of professionals for your gym equipment,
                    delivering outstanding results and making sure you're happy
                    with our service.
                  </h5>

                  <div className="d-flex ms-4 mt-4 ps-4 mt-4">
                    <div className="col-md-3 shdeule shed mt-3 text-center mt-4 mt-4 p-3">
                      <p>Contact Us</p>
                    </div>
                    <div className="mt-4 mt-4 ms-4 mt-4 border col-md-3 rounded-3 text-center p-3 wu">
                      Why Us
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="..."
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "700px" }}
                />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-12 supported-div text-center p-4">
          <h1 className="">
            <strong className="px-3 rounded-2">Supported Equipments</strong>
          </h1>
          <div className="row px-4 mt-4 mx-4 mt-4 mt-4 mt-4">
            <div className="d-flex justify-content-between px-4 mt-4">
              <FaChevronLeft className="fs-3 mt-4" />

              <div className="div-small rounded-3">
                <img
                  width="50%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1FM6foeNfDSdMaYAgYwyYh2q-MoP13AiMQ&s"
                  alt=""
                />
              </div>
              <div className="div-small rounded-3">
                <img
                  src="https://4 mt-4.imimg.com/data5/OJ/OQ/MY-2193248/high-pressure-washer-500x500.jpg"
                  width="56%"
                  alt=""
                />
              </div>
              <div className="div-small rounded-3">
                <img
                  src="https://www.aerophone.com.ph/image/cache/catalog/Xiaomi/XiaomiAccSmartCameraC200white/pimg_0-1000x1000.jpg"
                  alt=""
                  width="55%"
                />
              </div>
              <div className="div-small rounded-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-todyCy8Voe8LIaZZs1eX0uFmJgpi6VGJg&s"
                  alt=""
                  width="60%"
                />
              </div>
              <div className="div-small rounded-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qufNXdjQ5xs7kKQRZdLIDfKqJIDmS3lIew&s"
                  width="80%"
                  alt=""
                />
              </div>
              <div className="div-small rounded-3 p-2">
                <img
                  src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/pdp/laptop-g16-7630-intel-pdp-hero.psd?qlt=95&fit=constrain,1&hei=400&wid=570&fmt=png-alpha"
                  alt=""
                  width="90%"
                />
              </div>
              <FaAngleRight className="fs-3 mt-4" />
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-4 px-4 mt-4 pb-4 mt-4">
          <h3 className="text-center" style={{ color: "#843711" }}>
            WHY US?
          </h3>
          <div id="visible" className=""></div>

          <div className="row mx-4 mt-4 mt-4 mt-4">
            <div className="col-md-6 m-0 p-0 d-flex justify-content-between">
              <div className="col-md-4 mt-4">
                <img
                  src="https://unift.in/img/why-us-1.jpg"
                  alt=""
                  width="100%"
                  className="rounded-2"
                />
              </div>
              <div className="me-4 mt-4 col-md-7">
                <h3 className="ms-4" style={{ color: "#843711" }}>
                  Expertise and Experience
                </h3>
                <p className="ms-4 text-secondary">
                  Our experts have years of knowledge of gym layouts, equipment
                  handling, motor fixing, and repair services. Also, they make
                  sure that each installation or uninstallation project is
                  executed with safety regulations.
                </p>
              </div>
            </div>
            <div className="col-md-6 m-0 p-0 d-flex justify-content-between">
              <div className="col-md-4 mt-4">
                <img
                  src="https://unift.in/img/why-us-2.jpg"
                  alt=""
                  width="100%"
                  className="rounded-2"
                />
              </div>
              <div className="me-4 mt-4 col-md-7">
                <h3 className="ms-4" style={{ color: "#843711" }}>
                  Expertise and Experience
                </h3>
                <p className="ms-4 text-secondary">
                  Protect your fitness equipment by using our careful
                  installation, maintenance, and AMC services. We focus on
                  details with each safety guideline to avoid any kind of damage
                  and injury and keep them working at their best for a long time.
                </p>
              </div>
            </div>

            <div className="col-md-6 m-0 mt-4 mt-4 p-0 d-flex justify-content-between">
              <div className="col-md-4 mt-4">
                <img
                  src="https://unift.in/img/why-us-3.jpg"
                  alt=""
                  width="100%"
                  className="rounded-2"
                />
              </div>
              <div className="me-4 mt-4 col-md-7">
                <h3 className="ms-4" style={{ color: "#843711" }}>
                  Expertise and Experience
                </h3>
                <p className="ms-4 text-secondary">
                  Grow your gym business by relying on our affordable,
                  time-saving machine repair and services. We maintain hygiene
                  and focus on the lifespan of equipment while you concentrate on
                  managing your business.
                </p>
              </div>
            </div>

            <div className="col-md-6 m-0 p-0 mt-4 mt-4 d-flex justify-content-between">
              <div className="col-md-4 mt-4">
                <img
                  src="https://unift.in/img/preventive01.png"
                  alt=""
                  width="100%"
                  className="rounded-2"
                />
              </div>
              <div className="me-4 mt-4 col-md-7">
                <h3 className="ms-4" style={{ color: "#843711" }}>
                  Expertise and Experience
                </h3>
                <p className="ms-4 text-secondary">
                  Taking care of gym equipment before problems is a smart idea.
                  This keeps your equipment in better condition, reduces safety
                  risks, stops expensive repairs, and allows every member to
                  enjoy their workouts without interruptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <h2 className="text-center our-service" style={{ color: "#843711" }}>
            OUR SERVICES
          </h2>
          <h3 className="text-center" style={{ color: "#091E3E" }}>
            Elevate Your Experience with Our Premium Services
          </h3>
          <div id="visible2" className="mt-3"></div>
        </div>

        <div className="col-md-12 mt-4 mt-4 pb-3  ">
          <div className="row d-flex mt-4 mt-4 justify-content-center">

            {/* first */}

            <div className="col-md-4 pt-4 border shadow service-div ">
              <div id="service-icon-div" className="div-service text-center">
                <h1><TbAirConditioning />
                </h1>
              </div>
              <h4 className="text-dark text-center me-4 mt-4 mt-3 ps-3  title ms-4">
                <b>Ac Freeze Maintenance & Replacing</b>
              </h4>
              <p className="m-3 text-secondary ps-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque animi eveniet maxime architecto officiis? Enim
                quaerat veritatis excepturi!
              </p>
              <p className="text-center" style={{ color: "#bc6c25" }}>
                LEARN MORE <FaLongArrowAltRight />
              </p>
              <hr className="ms-4 mt-4" style={{ width: "300px" }} />
            </div>

            {/* second */}

            <div className="col-md-4 pt-4 border ms-3 shadow service-div">
              <div id="service-icon-div" className="div-service text-center">
                <h1><RiCarWashingFill />



                </h1>
              </div>
              <h4 className="text-dark text-center me-4 mt-4 mt-3 ps-3 title ms-4">
                <b>Ac Freeze Maintenance & Replacing</b>
              </h4>
              <p className="m-3 text-secondary ps-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque animi eveniet maxime architecto officiis? Enim
                quaerat veritatis excepturi!
              </p>
              <p className="text-center" style={{ color: "#bc6c25" }}>
                LEARN MORE <FaLongArrowAltRight />
              </p>
              <hr className="ms-4 mt-4" style={{ width: "300px" }} />
            </div>

            {/* 3rd div */}


            <div className="col-md-4 pt-4 ms-4 border shadow service-div">
              <div id="service-icon-div" className="div-service text-center">
                <h1><IoLogoElectron />
                </h1>
              </div>
              <h4 className="text-dark text-center me-4 mt-4 mt-3 ps-3 title ms-4">
                <b>Ac Freeze Maintenance & Replacing</b>
              </h4>
              <p className="m-3 text-secondary ps-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque animi eveniet maxime architecto officiis? Enim
                quaerat veritatis excepturi!
              </p>
              <p className="text-center" style={{ color: "#bc6c25" }}>
                LEARN MORE <FaLongArrowAltRight />
              </p>
              <hr className="ms-4 mt-4" style={{ width: "300px" }} />
            </div>

            {/* fourth */}

            <div className="col-md-4 pt-4 mt-4 mt-4 ms-4 border shadow service-div">
              <div id="service-icon-div" className="div-service text-center">
                <h1><TbDeviceCctvFilled />
                </h1>
              </div>
              <h4 className="text-dark text-center me-4 mt-4 mt-3 ps-3 title ms-4">
                <b>Ac Freeze Maintenance & Replacing</b>
              </h4>
              <p className="m-3 text-secondary ps-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque animi eveniet maxime architecto officiis? Enim
                quaerat veritatis excepturi!
              </p>
              <p className="text-center" style={{ color: "#bc6c25" }}>
                LEARN MORE <FaLongArrowAltRight />
              </p>
              <hr className="ms-4 mt-4" style={{ width: "300px" }} />
            </div>

            <div className="col-md-4 pt-4 mt-4 mt-4 ms-4 border shadow service-div">
              <div id="service-icon-div" className="div-service text-center">
                <h1><TbAirConditioning />
                </h1>
              </div>
              <h4 className="text-dark text-center me-4 mt-4 mt-3 ps-3 title ms-4">
                <b>Ac Freeze Maintenance & Replacing</b>
              </h4>
              <p className="m-3 text-secondary ps-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque animi eveniet maxime architecto officiis? Enim
                quaerat veritatis excepturi!
              </p>
              <p className="text-center" style={{ color: "#bc6c25" }}>
                LEARN MORE <FaLaptop />
              </p>
              <hr className="ms-4 mt-4" style={{ width: "300px" }} />
            </div>


          </div>
        </div>
        <div className="col-md-12 m-0 p-0 pb-4 mt-5 div-img">
          <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="100%" height="600vh" alt="" className='' />
          <div className="text2 w-100 row">
            <div className="col-md-12   text-center mt-5">
              <h3 className='shadow ps-5' style={{ color: "orangered" }}>CUSTOMER REVIEWS</h3>
              <h4 className='ps-5'>What our customer say...</h4>
              <div id="visible3" className=""></div>
            </div>
            <div className='d-flex ms-5'>
              <div className="col-md-3 box-user ms-5  box-user border bg-white mt-5  text-center p-3 rounded-3">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="100%" id="user-img" />
                <h5 className='name-user mt-3'>Vandana Luthra,Fitness Studio Owner</h5>
                <p className='text-dark mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus assumenda? Voluptatibus minus minima harum ea, est dolore cumque eius sequi aliquid tenetur ex possimus dicta dignissimos. Placeat, accusamus odio.</p>
              </div>
              <div className="col-md-3 box-user ms-3  mt-5 border bg-white  text-center p-3 rounded-3">
                <img src="https://www.styleseat.com/blog/wp-content/uploads/2021/12/man-with-medium-hair-scaled-1-1140x850.jpg" alt="" width="100%" id="user-img" />
                <h5 className='name-user mt-3'>Vandana Luthra,Fitness Studio Owner</h5>
                <p className='text-dark mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus assumenda? Voluptatibus minus minima harum ea, est dolore cumque eius sequi aliquid tenetur ex possimus dicta dignissimos. Placeat, accusamus odio.</p>
              </div>
              <div className="col-md-3 box-user ms-3 border bg-white mt-5  text-center p-3 rounded-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5eQpUGP2iCb5OS16SXpN0jXWx8zQ3fzy7w&s" alt="" width="100%" id="user-img" />
                <h5 className='name-user mt-3'>Vandana Luthra,Fitness Studio Owner</h5>
                <p className='text-dark mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, natus assumenda? Voluptatibus minus minima harum ea, est dolore cumque eius sequi aliquid tenetur ex possimus dicta dignissimos. Placeat, accusamus odio.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="col-md-12 bg-white">
          <div className="row">
            <div className="col-md-12 pb-5">
              <h4 className='text-center' style={{ color: "#843711" }}>HOW DOES UNIFT SERVICE WORK</h4>
              <p className='text-center mx-5  px-5' style={{ color: "#6B6A75" }}> <span className='mx-5 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque error temporibus, atque ab est molestiae sequi quo quam unde? Lorem ipsum dolor sit amet. Lorem ipsum  Lorem, ipsum..</span> </p>
              <div id="visible" className=""></div>

            </div>
            <div className="col-md-12  mt-5">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 ms-4  ps-3 pb-3 pt-3   bg-whiteblue ">
                  <div className=' text-center p-2 zerone-div'><span style={{ color: "orangered", fontSize: "1.60rem" }}>01</span></div>
                  <h4 className='mt-2'>Appointment booking:</h4>
                  <p className='text-secondary'>Schedule an appointment through our www.unift.in. Fill in all the details on the “Schedule an appointment” form and submit it. After submitting our team will contact you soon through your contact details.</p>
                </div>

                <div className="col-md-5 ms-4  ps-3  p-3  bg-whiteblue ">
                  <div className=' text-center p-2 zerone-div'><span style={{ color: "orangered", fontSize: "1.60rem" }}>01</span></div>
                  <h4 className='mt-2'>Diagnosis and Repair
                  </h4>
                  <p className='text-secondary'>After the initial contact, we will proceed with the following steps:
                    Diagnosis: Certified technicians assess all kinds of gym equipment like Treadmills/ Cross Trainer/ Elliptical Bikes/ Exercise bikes etc., to identify issues affecting performance.
                    Repair: Technicians perform repairs, including belt replacements, motor repairs, console repairs, power cord replacements, lubrication of moving parts, upholstery repairs, and frame welding or reinforcement of machines
                  </p>

                </div>

              </div>

            </div>
            <div className="col-md-12   mt-5">
           <div className="row mt-5 pb-3">
          
            
            <div className="col-md-1"></div>
            <div className="col-md-5 ms-2" >
            <div className=" ">   <h4 className=''>Schedule an Appointment</h4>
            <p className='mt-3 text-secondary font-wieght'>To schedule an appointment, please fill up the form and our  team will ensure to find a  suitable date and time for the meeting.</p>
            </div>
              <div className="row">
                <div className="col-md-11 d-flex p-5" style={{background:"#EEF9FF"}}>
                  <div className='mt-3'>
                    <h2><IoIosCall className='phone-orange' /></h2>
                  </div>
                  <div>
                    <div className='ms-5 text-secondary'><p>
                  <b>  Call Us Now</b></p></div>
                    <div c>
                      <h5  className='ms-5 text-danger'>+91 77135 84076</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-11 mt-4  d-flex p-5" style={{background:"#EEF9FF"}}>
                <div className='mt-1'>
                    <h2><MdOutlineMail  className='phone-orange' /></h2>
                  </div>
                  
                  <div className='ms-5' style={{color:"#843711"}}>
                      <h5 className='text-secondary'>Mail Us Now</h5>
                      <div className=' text-danger'><p>
                      <b> contact@unift.in </b></p></div>
                    </div>

                </div>
              </div>

           
              
            </div>
            <div className="col-md-5 p-4 text-center " style={{background:"#EEF9FF"}}>
              <form action="">
                <input type="text" form="form-controll" className='p-2 m-2  ipt bg-white'placeholder='Enter Your Name' />
                <input type="text" form="form-controll" className='p-2 m-1 ipt bg-white 'placeholder='Enter Your email' />

                <input type="text" form="form-controll" className='p-2 m-2 mt-3 ipt bg-white'placeholder='Enter Your mobile' />
                <input type="text" form="form-controll" className='p-2 m-1 ipt  bg-white 'placeholder='Enter Your address' />


                <input type="text" form="form-controll" className='p-2 m-2 ipt  mt-3 bg-white'placeholder='Enter Your pincode' />
                <input type="text" form="form-controll" className='p-2 m-1 ipt bg-white 'placeholder='Select State' />

                <textarea name=""  className='w-100 p-4 border border-none bg-shadow mt-3  rounded-1' placeholder='Describe your problem'  id=""></textarea>

                  <div className='book-Appointement col-md-12 mt-4 p-2  border  rounded-3 bg-booka'>
                        <h5>BOOK APOINTMENT</h5>

                  </div>

              </form>
            </div>
           </div>

              
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
