import React, { useEffect } from "react";
import Head from "next/head";
import { useClient } from "@react/server";

function Home() {
  useClient(); // Marking the Home component as a client entry
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </Head>
      <h1>Hello, World!</h1>
      <p>Some text.</p>
      <div className="w-full h-screen bg-green-300"></div>
      <p>Some more text.</p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/d/48p-yxk-h87?hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}

export default Home;
