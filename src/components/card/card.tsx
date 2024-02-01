"use client";

import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = (value: any) => {
  //   console.log(value);
  return (
    <div>
      <div className={styles.card_main}>
        <div className={styles.cardImage}>
          {" "}
          <Image
            src={value.value.image}
            alt="..."
            height={500}
            width={500}
            className={styles.img1}
          />{" "}
        </div>

        <div className={styles.card_about}>
          {/* <h5>{capatalize(data?.category)}</h5> */}
          <p>{value.value.name}</p>
          <div className={styles.pricing}>
            <h5>starting Price - ₹{value.value.price} </h5>
            <h5>{value.value.distance} Km</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
