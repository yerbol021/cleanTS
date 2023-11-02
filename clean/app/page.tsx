"use client"
import Head from "next/head";
import BootstrapCarousel from "/Users/yerbolkuldeyev/lighthouse/cleanTS/clean/app/components/navigation/carousel/Bootstrap";
import Slider from "./components/navigation/slider/Slider";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>Some text</p>
{/* <Slider/> */}
      

        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Some more text
        </p>
      </div>
    </>
  );
}
