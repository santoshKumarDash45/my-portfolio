import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "Utkal University, Bhubaneswar",
      degree: "Master of Technology (M.Tech) – Information Technology",
      year: "2016",
      des: "Graduated with CGPA: 6.8 in Information Technology.",
    },
    {
      name: "RGPV University, Madhya Pradesh",
      degree: "Bachelor of Engineering (B.E.) – Computer Science & Engineering",
      year: "2013",
      des: "Completed with 73.13% marks in Computer Science & Engineering.",
    },
  ];

  const colors = ["#001CCE", "#4B088A"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index % colors.length], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index % colors.length], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "yellow" }}
              >
                {item.degree}
              </h5>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
