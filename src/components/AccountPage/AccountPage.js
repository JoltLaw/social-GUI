import styles from "./AcountPage.module.css";
import UserPageHeader from "./UserPageHeader";
import UserPosts from "./UserPosts";

const AccountPage = (props) => {
  const userPostHandler = (post) => {
    props.onPost(post);
  };

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <UserPageHeader userName={props.userName} userPfp={props.userPfp} />
        <UserPosts
          posts={props.userPosts}
          userName={props.userName}
          onPost={userPostHandler}
        />
      </div>
    </div>
  );
};

export default AccountPage;
