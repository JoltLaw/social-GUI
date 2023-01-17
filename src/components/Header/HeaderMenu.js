import styles from "./HeaderMenu.module.css";
import HeaderMenuItem from "./HeaderMenuItem";

const HeaderMenu = (props) => {
  const closeMenuHandler = () => {
    props.onClick();
  };

  return (
    <div className={styles.MenuContainer}>
      <ul className={styles.menuList}>
        <HeaderMenuItem>Acount</HeaderMenuItem>
        <HeaderMenuItem>Favorites</HeaderMenuItem>
        <HeaderMenuItem>Settings</HeaderMenuItem>
        <HeaderMenuItem onClick={closeMenuHandler}>Close</HeaderMenuItem>
      </ul>
    </div>
  );
};

export default HeaderMenu;
