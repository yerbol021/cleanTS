"use client";

import { useState } from "react";
import CarouselItems from "@/public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../styles/Bootstrap.module.css";
import Image from "next/image";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
      {CarouselItems.map((item) => (
        <Carousel.Item key={item.id} /*className={styles.itemP}*/>
          <Image
            className="carousel-img"
            src={item.imageUrl}
            width={800}
            height={300}
            alt="slides"
          />
          <Carousel.Caption /*className={styles.caption}*/>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
