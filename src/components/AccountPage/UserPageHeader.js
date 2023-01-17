import styles from "./UserPageHeader.module.css";

const UserPageHeader = (props) => {
  return (
    <div className={styles.userHeader}>
      <div className={styles.userInfo}>
        <div>
          <h1>{props.userName}</h1>
        </div>
      </div>
      <div className={styles.dotMenu}>
        <span>·</span>
        <span>·</span>
        <span>·</span>
      </div>
    </div>
  );
};

export default UserPageHeader;
