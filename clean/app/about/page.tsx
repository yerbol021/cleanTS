import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-details">
          <h3>History</h3>
          <p className="first-line">
            History Coolday Cleaning Service, established in 2023, has been
            proudly serving the vibrant community of Vancouver, B.C. with
            exceptional residential and commercial cleaning solutions.
          </p>
          <p className="second-line">
            As a professional home and office cleaning company, we prioritize
            maintaining a courteous and respectful approach to both your
            employees and loved ones. What sets us apart is our commitment to
            using environmentally friendly cleaning products and innovative
            cleaning techniques, ensuring cleaner and healthier spaces for our
            valued clients.
          </p>
          <p className="third-line">
            Coolday Cleaning Service has earned a sterling reputation as the
            most trusted name in the residential cleaning industry, consistently
            exceeding customer expectations with our unwavering commitment to
            quality service and top-notch customer care. We take pride in using
            eco-friendly products that align with our customers' desires for a
            cleaner and greener environment.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/11.jpeg" alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
