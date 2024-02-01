import { useState } from "react";
import styles from "./menu.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type props = {
  data: any;
  selectedData: any;
  handleselect: (params: any) => any;
};

const Menu = ({ data, selectedData, handleselect }: props) => {
  // console.log(data);
  const [openMenu, setopenMenu] = useState<any>();
  const handleOpen = (props: any, ind: any) => {
    console.log(props, ind);
    if (openMenu == ind) {
      setopenMenu(null);
    } else setopenMenu(ind);
  };

  // console.log(selectedData);
  return (
    <div className={styles.menu_body}>
      {Object.keys(data)?.map((val: any, ind: any) => {
        return (
          <>
            <ul key={ind} onClick={() => handleOpen(val, ind)}>
              <p> {val} </p>
              {openMenu == ind ? <FaAngleUp /> : <FaAngleDown />}
            </ul>
            {data[val].map((values: any, index: any) => {
              return (
                <div
                  className={styles.menu_value}
                  style={{ display: ind == openMenu ? "flex" : "none" }}
                >
                  <input
                    type="checkbox"
                    name={val.options_name}
                    value={values}
                    onChange={(e) => handleselect(e)}
                    checked={
                      selectedData[val.options_name]?.includes(values)
                        ? true
                        : false
                    }
                  />
                  <li>{values}</li>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Menu;
