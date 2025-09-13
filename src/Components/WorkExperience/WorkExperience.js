import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Carvewing Solutions LLP (Client: Paxia)",
      position: "Senior Software Engineer",
      des: `Developed airline asset and inventory management modules, 
      implemented DRP/MRP workflows, built SKU-level tracking, 
      invoice validation workflows, and optimized React rendering 
      & API handling, improving performance by 20%.`,
      year: "Oct 2023 – Present",
      techskills: [
        { techname: "React.js" },
        { techname: "Context API" },
        { techname: "Zustand" },
        { techname: "JavaScript (ES6+)" },
        { techname: "Python" },
        { techname: "Django" },
        { techname: "PostgreSQL" },
        { techname: "AWS" },
      ],
    },
    {
      companyname: "Code Clouds IT Solutions Pvt. Ltd.",
      position: "Senior Front-End Developer",
      des: `Worked on HRMS (employee management, leave tracking, 
      reporting) and Electronics Manufacturing (inventory, vendor, 
      component tracking). Delivered responsive UI improving 
      engagement by 25% and built API-driven inventory dashboards.`,
      year: "Jan 2022 – Oct 2023",
      techskills: [
        { techname: "React.js" },
        { techname: "Next.js" },
        { techname: "Redux Toolkit" },
        { techname: "Ant Design" },
        { techname: "Node.js" },
        { techname: "Express.js" },
        { techname: "MongoDB" },
      ],
    },
    {
      companyname: "Muvi Entertainment Pvt. Ltd.",
      position: "Software Engineer",
      des: `Developed ticketing workflows, reusable React components, 
      and integrated real-time API endpoints for a workflow 
      management system.`,
      year: "Jun 2020 – Jan 2022",
      techskills: [
        { techname: "React.js" },
        { techname: "Redux Toolkit" },
        { techname: "Material UI" },
        { techname: "PHP (Yii)" },
      ],
    },
    {
      companyname: "Intelliapt Technologies Pvt. Ltd.",
      position: "Software Developer Intern",
      des: `Built a Search Analytics Dashboard using React.js and 
      Chart.js, integrated Django REST APIs for real-time data updates.`,
      year: "Oct 2019 – Apr 2020",
      techskills: [
        { techname: "React.js" },
        { techname: "Redux Toolkit" },
        { techname: "Ant Design" },
        { techname: "Python (Django)" },
        { techname: "Chart.js" },
      ],
    },
    {
      companyname: "Brahmaputra Softech Pvt. Ltd.",
      position: "Software Engineer",
      des: `Developed ticketing-based enterprise web applications using React Js , Javascript , HTML , CSS.
       Designed dynamic UI components 
      and validated workflows for accuracy and performance.`,
      year: "Apr 2017 – Apr 2019",
      techskills: [
        { techname: "React Js" },
        { techname: "Javascript" },
        { techname: "HTML" },
        { techname: "CSS" },
      ],
    },
  ];

  const colors = ["#800000", "#FF8042", "#001CCE", "#4B088A", "#FF6347"];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
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
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

              <div className="row">
                {item.techskills.map((tec, i) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
