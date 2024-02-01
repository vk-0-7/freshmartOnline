"use client";

import React, { useState, useEffect } from "react";
import styles from "./sidefilter.module.css";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
// import api from "@/api";
import { GrFormFilter } from "react-icons/gr";
import { useRouter } from "next/navigation";
import Menu from "./menu";
import { filterData } from "@/Data/product_db";

type Props = {
  selectedData: any;
  setSelectedData: any;
  // updateQuery: any;
};

const Sidefilter = ({ selectedData, setSelectedData }: Props) => {
  const router = useRouter();
  // console.log(router);
  // const params = useSearchParams();
  const pathname = usePathname();
  // console.log(params.get("category"), pathname);
  const [openfilterModal, setopenfilterModal] = useState<any>(false);
  const [category, setCategory] = useState<any>();
  const [largeScreen, setLargeScreen] = useState<any>();
  // const [allsliderValue, setallSlidervalue] = useState<any>([0, 50]);
  // const [productTypes, setProductTypes] = useState<any>();
  // const [allFilterValue, setAllFilterValue] = useState<any>();
  // const [colors, setColors] = useState<any>();

  const [sideFilterData, setSideFilterData] = useState<any>([]);

  // useEffect(() => {
  //   getFilterData();
  // }, []);

  // const getFilterData = () => {
  //   api({
  //     method: "GET",
  //     url: `products/getSpecificationData/${process.env.NEXT_PUBLIC_IDENTIFIER}?productType=jewellery`,
  //   })
  //     .then((res: any) => {
  //       console.log(res?.data);
  //       setSideFilterData(res?.data);
  //     })
  //     .catch((err:any) => console.log(err));
  // };

  // const handlePriceChange = (values: any) => {
  //   let temp = { ...selectedData };
  //   temp.priceMin = values[0];
  //   temp.priceMax = values[1];
  //   addToQuery({ ...temp });
  // };

  // const handleselect = (e: any) => {
  //   // console.log(e.target);
  //   console.log(e.target.name, e.target.value, e.target.checked);
  //   var { name, value } = e.target;
  //   console.log(selectedData);
  //   let temp = { ...selectedData };
  //   // temp["category"] = params.get("category");
  //   if (e.target.checked) {
  //     // temp[name] = [...temp[name], value];
  //     temp = { ...temp, [name]: [value] };
  //     console.log(temp);
  //   }
  //   // remove the element from selectedData when unchecked
  //   else {
  //     let dum = temp[name];
  //     console.log(dum);

  //     dum.splice(temp[name].indexOf(value), 1);
  //     temp[name] = dum;
  //   }
  //   console.log(temp);
  //   addToQuery({ ...temp });
  // };

  // const addToQuery = (val: any) => {
  //   console.log(val);

  //   const query = {
  //     category: params.get("category"),
  //     // Stone: val.Stone?.join(","),
  //     // Metal: val.Metal?.join(","),
  //   };
  //   sideFilterData?.map((value: any) => {
  //     const fieldName = value.options_name;
  //     // @ts-ignore
  //     query[fieldName] = val[fieldName]?.join(",");
  //   });
  //   console.log(query);
  //   const temp_query = {};
  //   Object.keys(query).map((val) => {
  //     //@ts-ignore
  //     if (query[val] !== "" && query[val] !== undefined) {
  //       //@ts-ignore
  //       temp_query[val] = query[val];
  //     }
  //     return val;
  //   });
  //   console.log(temp_query);
  //   const current = new URLSearchParams(temp_query);
  //   const search = current.toString();
  //   console.log(search);
  //   router.push(`${pathname}?${search}`);
  // };

  // This below function push all values stored in selectedData in a array to display in active filter section.

  // useEffect(() => {
  //   let allValues: any = [];
  //   Object.keys(selectedData).map((val) => {
  //     if (selectedData[val]?.length >= 0) {
  //       const array = selectedData[val];
  //       allValues.push(...array);
  //     }
  //   });
  //   setAllFilterValue(allValues);
  // }, [selectedData]);

  // const handledelete = (e: any) => {
  //   let temp = { ...selectedData };
  //   let e2 = e.toLowerCase();
  //   console.log(e2);
  //   Object.keys(selectedData).map((val: any) => {
  //     let dum = temp[val];

  //     if (temp[val].includes(e)) {
  //       dum.splice(temp[val].indexOf(e), 1);
  //       temp[val] = dum;

  //       addToQuery({ ...temp });
  //     }
  //   });
  // };

  // const handleClearAll = () => {
  //   let temp = { ...selectedData };

  //   (temp.Metal = []), (temp.Stone = []), addToQuery({ ...temp });
  // };

  // console.log(sideFilterData);
  // console.log(selectedData);
  const [activeFilter, setactiveFilter] = useState<any>(0);

  useEffect(() => {
    window.innerWidth > 1000 ? setLargeScreen(true) : setLargeScreen(false);
  }, []);

  // const displaySmFilter = () => {
  //   var filters = sideFilterData[activeFilter];
  //   var filtervalue = filters.options_name;
  //   console.log(filtervalue);
  //   return (
  //     <div className={styles.new_filter}>
  //       {filters?.options_value?.map((val: any, index: any) => {
  //         return (
  //           <span key={index}>
  //             <input
  //               type="checkbox"
  //               name={sideFilterData[activeFilter]?.options_name}
  //               value={val}
  //               // onChange={handleselect}
  //               // checked={
  //               //   selectedData[filtervalue]?.includes(val[0]) ? true : false
  //               // }
  //             />
  //             <p>{val}</p>
  //           </span>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <>
      {largeScreen ? (
        <>
          <div className={styles.active_filter}>
            {/* {allFilterValue?.length > 0 && allFilterValue[0] != undefined && (
              <div className={styles.filterAndClear}>
                <h5>active filter</h5>
                
              </div>
            )} */}
            {/* {allFilterValue?.length > 0 && (
              <div className={styles.filters}>
                {allFilterValue
                  .filter((val: any) => val != undefined)
                  .map((item: any, index: any) => {
                    return (
                      <button key={index} value={item}>
                        <p>{item}</p>
                        <RxCross2 onClick={() => {}} />{" "}
                      </button>
                    );
                  })}
              </div>
            )} */}
          </div>
          <div
            className={styles.dropdown_filter_main}
            style={{ marginTop: "20px" }}
          >
            <Menu
              data={filterData}
              selectedData={selectedData}
              // setSelectedData={setSelectedData}
              handleselect={() => {}}
            />
          </div>
        </>
      ) : (
        <>
          {openfilterModal ? (
            <div className={styles.filter_button}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "25vw",
                  alignItems: "center",
                }}
              >
                {" "}
                <p onClick={() => setopenfilterModal((prev: any) => !prev)}>
                  CLOSE
                </p>{" "}
                <p onClick={() => setopenfilterModal((prev: any) => !prev)}>
                  APPLY
                </p>{" "}
              </span>
            </div>
          ) : (
            <div
              className={styles.filter_button}
              onClick={() => setopenfilterModal((prev: any) => !prev)}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <GrFormFilter /> <p>FILTER</p>
              </span>
            </div>
          )}

          {/* {openfilterModal && (
            <div className={styles.filter_modal_main}>
              <div className={styles.filter_modal_top}>
                <p>Filters</p>
                <p onClick={() => {}}>Clear All</p>
              </div>
              <div className={styles.main_filter_container}>
                <div className={styles.filter_items}>
                  {sideFilterData.map((val: any, index: any) => {
                    return (
                      <>
                        <h5 key={index} onClick={() => setactiveFilter(index)}>
                          {val?.options_name}
                        </h5>
                      </>
                    );
                  })}
                </div>
                // <div className={styles.selected_filter}>
                //   {displaySmFilter()}
                // </div> 
              </div>
            </div>
          )} */}
        </>
      )}
    </>
  );
};

export default Sidefilter;
