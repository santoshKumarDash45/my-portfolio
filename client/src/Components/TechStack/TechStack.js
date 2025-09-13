import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const data = [
    { name: "Full Stack Developer" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Redux / Redux Toolkit" },
    { name: "Context API / Zustand" },
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "HTML5 & CSS3" },
    { name: "Material UI / Ant Design" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Python (Django)" },
    { name: "PHP (Yii Framework)" },
    { name: "PostgreSQL / MySQL" },
    { name: "MongoDB" },
    { name: "AWS" },
    { name: "Git / Jira" },
    { name: "Nginx / Apache" },
    { name: "Ubuntu" },
  ];

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
    "#7B1FA2",
    "#2E7D32",
    "#FF5722",
    "#1976D2",
    "#9C27B0",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right key={index}>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
