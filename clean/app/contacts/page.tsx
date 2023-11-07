import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="contacts div">
      <div className="call us">
        <img src="/images/call us.jpeg" alt="Call us" />
        <h4>Call us and Book a date</h4>
        <h3></h3>
      </div>
      <div className="wait us">
        <img src="/images/wait us.png" alt="Wait us" />
        <h4>Meet our cleaning team</h4>
        <h3></h3>
      </div>
      <div className="enjoy">
        <img src="/images/enjoy.png" alt="Enjoy" />
        <h4>Enjoy results</h4>
        <h3></h3>
      </div>
    </div>
  );
};

export default Contacts;
