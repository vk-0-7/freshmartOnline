import { useState, useEffect } from "react";
import styles from "./searchModal.module.css";
import Image from "next/image";
import search from "../../Assets/Icons/search.svg";
// import { productData } from "@/Data/data";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
// import CircularProgress from "@mui/joy/CircularProgress";
// import { collectioncard, businessNavData } from "@/Data/data";
// import { MapCollectionToName, titleCase } from "@/utils";
// import callApi from "@/api";
// import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
// import { cartRecommendation } from "@/utils/recommendation";
// import Loader from "./Loader";

const SearchModal = ({ setShowSearch, val, setSearchValue }: any) => {
  const [productData, setProductData] = useState<any>([]);
  const [recommendedproductData, setRecommendedProductData] = useState<any>([]);
  // const cartData = useSelector((state: any) => state?.cart);
  // const cartAllData = useSelector((state: any) => state?.localcart);
  // const router = useRouter();
  useEffect(() => {
    const modal: any = document.getElementById("modal");
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        // modal.style.display = "none";
        setShowSearch(false);
        setSearchValue("");
      }
    });
  }, []);

  const handleProductpage = (slug: any) => {
    setShowSearch(false);
    router.push("/" + slug);
  };

  return (
    <div className={styles.Modal_full} id="modal">
      <div className={styles.search_full} id="scroll_div">
        <div
          className={styles.search_top}
          id={val ? styles.valid : styles.invalid}
        >
          <Image src={search} alt="..." />

          <input
            type="text"
            // placeholder="Search by"
            value={val}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className={styles.placeholder}>
            <TypeAnimation
              sequence={[
                "Search by Restaurent",
                "Search by Collection",
                1000,
                "Search by SKU",
                1000,
                "Search by Product Name",
                1000,
                "Search by Product Use",
                1000,
                "Search by Product Color",
              ]}
              // wrapper="span"
              preRenderFirstString={true}
              cursor={true}
              repeat={Infinity}
              // style={{ fontSize: "1.5rem", display: "inline-block" }}
            />
          </span>
          <span
            className={styles.cross}
            onClick={() => {
              setShowSearch(false);
              setSearchValue("");
            }}
          >
            <RxCross1 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
