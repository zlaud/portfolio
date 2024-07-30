import React from "react";
import "../styles/Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  var settings = {
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="skillList">
      <ul>
        <Slider {...settings}>
          <div className="category">
            <h2>web development:</h2>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className="category">
            <h2>machine learning:</h2>

            <ul className="skills">
              <li>Python</li>
              <li>NumPy</li>
              <li>Seaborn</li>
              <li>Matplotlib</li>
              <li>Pandas</li>
              <li>Scikit-learn</li>
              <li>Jupyter Notebook</li>
            </ul>
          </div>
          <div className="category">
            <h2>database:</h2>

            <ul className="skills">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Supabase</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="category">
            <h2>software and tools:</h2>

            <ul className="skills">
              <li>Git</li>
              <li>Postman</li>
              <li>VS Code</li>
            </ul>
          </div>
        </Slider>
      </ul>
    </div>
  );
};

export default Skill;
