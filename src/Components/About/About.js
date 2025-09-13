import React from "react";
import "./About.css";
import ProfilePic from "../../Image/FF.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                I am a <b>Senior Software Engineer</b> with over <b>7 years of experience </b> 
                 in building <b>scalable, high-performance web applications</b>. 
                I specialize in modern technologies like <b>React.js, Redux, JavaScript, 
                Node.js, and Python/Django</b>, delivering enterprise-grade solutions 
                across diverse domains including <b>Asset Management, Supply Chain, HRMS, 
                and OTT platforms</b>.
              </p>
              <p>
                My expertise lies in <b>UI/UX design</b>, <b>API integration</b>, 
                <b>state management</b>, and <b>performance optimization</b>. 
                I enjoy solving complex problems, creating intuitive user experiences, 
                and collaborating with teams to deliver impactful products that 
                drive real business value.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
