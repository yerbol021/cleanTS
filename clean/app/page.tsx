import React, { useEffect } from "react";
import Head from "next/head";

function Home() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Some text.</p>
      <div className="w-full h-screen bg-green-300"></div>
      <p>Some more text.</p>
    </div>
  );
}

export default Home;
