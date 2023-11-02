import React from "react";
import ".//services.css";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-details">
        <h3>Residential Cleaning</h3>
        <p className="first-line">
          Free yourself from tons of housework and start getting more from your
          weekends. We offer weekly, bi-weekly, or one-time cleaning at
          affordable rates.
        </p>
        <p className="second-line">
          Plus, we include things like ironing and appliance cleaning for the
          same flat-fee.
        </p>
        <p className="third-line">
          Also, we have many other services available such as laundry, ironing,
          appliance cleaning, pet sitting, and more...
        </p>
      </div>
      <div className="service-image">
        <img src="/images/1.jpeg" alt="Residential Cleaning" />
      </div>
    </div>
  );
};

export default Services;
