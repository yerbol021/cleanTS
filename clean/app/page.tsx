import React, { useEffect } from "react";
import HomeCarousel from "./components/carousel/home-carousel";
import Script from "next/script";

function Home() {
  return (
    <div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/coolday/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <h1>Hello, World!</h1>
      <HomeCarousel />
    </div>
  );
}

export default Home;
