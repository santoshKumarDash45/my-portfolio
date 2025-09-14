import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [


    {
      name: "MERN Stack",
      des: "This is a dummy project done for showing tech skills .",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "Redux",
        },

        {
          techname: "React Js",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
