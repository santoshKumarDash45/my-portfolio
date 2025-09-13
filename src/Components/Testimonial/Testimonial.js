import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [

    {
      name: "Sunil",
      position: "Senior Developer",
      des: "He is good in frontend with deep knowledge in react js and next js",
      img: "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      name: "Manoj",
      position: "Full Stack Developer",
      des: "He worked on complex project and complex calculation which is in assets management for airline projects",
      img: "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     
    },

    {
      name: "Sujeet",
      position: "Tech Lead",
      des: "He was good at his work. He worked on several complex project",
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];
  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
                <div className="content-slider" key={index} style={{backgroundColor:colors[index]}}>
                  <img
                    src={item.img}
                    alt="testimonil imgae"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.des}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
