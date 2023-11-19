import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="main_div">
      <div className="contacts div">
        <div className="call us">
          <a href="tel:+16726672700" title="Call Us">
            <img src="/images/call us.jpeg" alt="Call us" />
          </a>
          <h4>Call Us and Book a date</h4>
          <h3></h3>
        </div>
        <div className="wait us">
          <img src="/images/wait us.png" alt="Wait us" />
          <h4>Meet our cleaning Team</h4>
          <h3></h3>
        </div>
        <div className="enjoy">
          <img src="/images/enjoy.jpeg" alt="Enjoy" />
          <h4>Enjoy results</h4>
          <h3></h3>
        </div>
      </div>
      <div className="calendly">
        <div className="calendly form"></div>
      </div>
    </div>
  );
};

export default Contacts;
