import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SlideContent = () => {
  const settings = {
    dots: true, // Show dots at the bottom of the slider
    infinite: true, // Infinite scroll
    speed: 500, // Speed of the slide transition
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time before switching slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // For tablets and medium screens, show 2 slides
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // For mobile devices, show 1 slide
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide-item">
          <div className="slider-content">
            <div className="content">
              <h2>First Slide Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis quam vel nisi luctus feugiat.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide-item">
          <div className="slider-content">
            <div className="d-flex px-5">
              <div className="col-md-3 box-user bg-white mt-5 text-center p-3 rounded-3">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  width="100%"
                  id="user-img"
                />
                <h5 className="name-user overc mt-3">
                  Vandana Luthra, Fitness Studio Owner
                </h5>
                <p className="text-dark mt-3 overc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  natus assumenda? Voluptatibus minus minima harum ea, est dolore
                  cumque eius.
                </p>
              </div>
              <div className="col-md-3 box-user mt-5 border bg-white text-center p-3 rounded-3">
                <img
                  src="https://www.styleseat.com/blog/wp-content/uploads/2021/12/man-with-medium-hair-scaled-1-1140x850.jpg"
                  alt=""
                  width="100%"
                  id="user-img"
                />
                <h5 className="name-user mt-3">
                  John Doe, Fitness Trainer
                </h5>
                <p className="text-dark mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  natus assumenda? Voluptatibus minus minima harum ea, est dolore
                  cumque eius sequi aliquid tenetur ex possimus dicta dignissimos.
                </p>
              </div>
              <div className="col-md-3 box-user border bg-white mt-5 text-center p-3 rounded-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5eQpUGP2iCb5OS16SXpN0jXWx8zQ3fzy7w&s"
                  alt=""
                  width="100%"
                  id="user-img"
                />
                <h5 className="name-user mt-3">
                  Emma Watson, Health Coach
                </h5>
                <p className="text-dark mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                  natus assumenda? Voluptatibus minus minima harum ea, est dolore
                  cumque eius sequi aliquid tenetur ex possimus dicta dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide-item">
          <div className="slider-content">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Slide 3"
              className="slider-image"
            />
            <div className="content">
              <h2>Third Slide Title</h2>
              <p>
                Vivamus at velit sed dui mollis congue non et tortor. Aliquam
                auctor ligula non ligula mollis, eu ultricies ligula vulputate.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideContent;
