import styles from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState();

  const openMenuHanlder = (event) => {
    setOpenMenu(true);
  };
  const closeMenuHandler = (event) => {
    setOpenMenu(false);
  };

  return (
    <div>
      {openMenu && <HeaderMenu onClick={closeMenuHandler} />}
      <div className={styles.header}>
        <div className={styles.logo}>
          <h2>Rise</h2>
        </div>
        <div className={styles.searchBar}>
          <input type="search"></input>
        </div>
        <div className={styles.hamburgerIcon} onClick={openMenuHanlder}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
