"use client";

import React, { useState } from "react";

// import { toggleModal } from "@/store/userSlice";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../Assets/Icons/fb.svg";
import youtube from "../../Assets/Icons/tube.svg";
import linkdin from "../../Assets/Icons/linkdin.svg";
import whatsapp from "../../Assets/Icons/whatsapp.svg";
import insta from "../../Assets/Icons/insta.svg";

import { categoryData, productData } from "../../Data/footer_db";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.main_footer}>
        <div className={styles.first_container}>
          {/* this button is only for mobile devices */}
          <div className={styles.mob_btn}>
            <button className={styles.shining_btn}>Become a Member</button>
          </div>
          <div className={styles.four_rows}>
            <div>
              <h3>Products</h3>
              {productData.map((val: any) => {
                return (
                  <>
                    <Link href={"#"}>
                      {" "}
                      <p>{val.productName}</p>
                    </Link>
                  </>
                );
              })}
            </div>
            <div>
              <h3>Popular Categories</h3>
              {categoryData.map((val: any) => {
                return (
                  <>
                    <Link href={"#"}>
                      {" "}
                      <p>{val.categoryName}</p>
                    </Link>
                  </>
                );
              })}
            </div>
            <div>
              <h3>About</h3>
              <Link href={"#"}>
                <p>Career</p>
              </Link>

              <Link href={"#"}>
                <p> Blog</p>
              </Link>
              <Link href={"#"}>
                {" "}
                <p> Press</p>
              </Link>
            </div>
            <div>
              <h3>Lead</h3>

              <Link href={"#"}>
                {" "}
                <p> Value</p>{" "}
              </Link>
              <Link href={"#"}>
                {" "}
                <p> FAQ</p>{" "}
              </Link>

              <Link href={"#"}>
                <p>Terms Of Service</p>
              </Link>
              <Link href={"#"}>
                <p>Privacy Policy</p>
              </Link>
              <Link href={"#"}>
                <p>Shipping Policy</p>
              </Link>
            </div>
          </div>
        </div>

        {/* testing */}

        <div className={styles.second_container}>
          <div className={styles.icons}>
            <a href="#" target="_blank">
              {" "}
              <Image src={facebook} alt="..." />{" "}
            </a>
            <a href="#" target="_blank">
              <Image src={linkdin} alt="..." />
            </a>

            <a href="#" target="_blank">
              <Image src={insta} alt="..." />
            </a>
            <a href=" #" target="_blank">
              <Image src={whatsapp} alt="..." />
            </a>
          </div>
          <h5>Copyright © 2023 FreshMartOnline Pvt. Ltd.</h5>
          <h5>
            Developed in India by{" "}
            <a href="https://bit.ly/3MT0O85">Hoping Minds</a>{" "}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
