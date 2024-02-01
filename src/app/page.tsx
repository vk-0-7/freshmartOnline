"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/carousel";
import ProductCarousel from "@/components/carousel/productCarousel";
import { useState } from "react";

import { youMayLikeData, productData } from "@/Data/product_db";
import Sidefilter from "../components/sidefilter/sidefilter";
import Card from "@/components/card/card";

export default function Home() {
  const [selectedCat, setselectedCat] = useState("");

  const handleClick = (category: string) => {
    setselectedCat(category);
  };

  return (
    <main>
      <Carousel />
      <div className={styles.you_may_like}>
        {youMayLikeData?.map((val: any, ind: any) => {
          return (
            <div onClick={() => handleClick(val.category)}>
              {" "}
              <Image src={val.image} alt="..." />
            </div>
          );
        })}
      </div>
      <div className={styles.Product_section}>
        <div className={styles.sidefilter}>
          <Sidefilter selectedData={""} setSelectedData={""} />
        </div>
        <div className={styles.products}>
          {productData
            ?.filter((val: any) =>
              selectedCat == "" ? true : val.items.includes(selectedCat)
            )
            ?.map((val: any, ind: any) => {
              return <Card value={val} />;
            })}
        </div>
      </div>
    </main>
  );
}
