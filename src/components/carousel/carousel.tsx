"use client";

import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Banner from "../../Assets/Images/banner.webp";
import Banner2 from "../../Assets/Images/banner2.jpeg";
import Banner3 from "../../Assets/Images/banner3.jpeg";
import Banner4 from "../../Assets/Images/banner4.jpeg";
import styles from "./carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.carousel_main}>
      <div style={{ paddingInline: "1vw" }} className="no_controllers">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perPage: 1,
            pagination: true,
            perMove: 1,
            wheel: false,
            gap: "5vw",
            arrows: true,
            autoplay: true,
            interval: 3000,
            speed: 1000,
            delay: 5,
            // duration:500,
            pauseOnHover: false,
            drag: true,
            breakpoints: {
              900: {
                perPage: 3,
              },
              700: {
                perPage: 1,
              },
              500: {
                perPage: 1,
              },
            },

            // speed:speed,
          }}
        >
          <SplideSlide>
            <Image src={Banner2} alt="lead Image" height={500} width={500} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Banner3} alt="lead Image" height={500} width={500} />
          </SplideSlide>
          <SplideSlide>
            <Image src={Banner4} alt="lead Image" height={500} width={500} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
