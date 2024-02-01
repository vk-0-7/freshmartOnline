"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import search from "../../Assets/Icons/search.svg";
import cart from "../../Assets/Icons/cart.svg";
import user from "../../Assets/Icons/user.svg";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import axios from "axios";

const Navbar = ({ type }: any) => {
  const [searchvalue, setSearchValue] = useState(null);
  const [location, setLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSearchInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  const getLocationAddress = async (lati: any, longi: any) => {
    console.log(lati, longi);
    try {
      const res = await fetch(
        `https://geocode.maps.co/reverse?lat=${lati}&lon=${longi}&api_key=65bb467db90ab669670150tzu3dcab7`
      );
      const response = await res.json();
      console.log(response);
      setLocation(response.address.state_district);
    } catch (error) {
      console.log(error);
    }
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos: any) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    getLocationAddress(crd.latitude, crd.longitude);
  }

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return (
    <>
      <div className={`${styles.nav_main}`}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3> Fresh-Mart-Online</h3>
          </Link>
        </div>
        <div className={styles.nav}>
          <Link href={"#"} onClick={handleLocation}>
            <IoLocation />
            {location}
          </Link>
          {/* <Link href={"/about"}>
            <p>ABOUT</p>{" "}
          </Link> */}
          <Link href={"/categories"}>
            {" "}
            <p>CATEGORIES</p>{" "}
          </Link>
          <Link href={"/products"}>
            <p>PRODUCTS</p>
          </Link>
          <div className={styles.search} onClick={() => setShowSearch(true)}>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchInput}
            />
            <Image src={search} alt="..." />
          </div>
          <Image src={cart} alt="..." />
          <Image src={user} alt="..." />
        </div>
      </div>
    </>
  );
};

export default Navbar;
