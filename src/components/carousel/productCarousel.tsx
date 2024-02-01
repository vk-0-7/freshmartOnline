"use client";

import React from "react";
import Card from "../card/card";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductCarousel = (data: any) => {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: 4,
          pagination: true,
          perMove: 1,
          wheel: false,
          gap: "3vw",
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
        {data.data.map((val: any, ind: any) => {
          return (
            <SplideSlide>
              <Card value={val} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ProductCarousel;
