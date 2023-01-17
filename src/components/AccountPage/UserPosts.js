import Button from "../UI/Button";
import styles from "./UserPosts.module.css";
import CreatePost from "./CreatePost";
import PostViewer from "./PostViewer";
import { useState } from "react";

const UserPosts = (props) => {
  const [creatingPost, setCreatingPost] = useState();
  const [viewingPost, setViewingPost] = useState();
  const [renderedPost, setRenderedPost] = useState();

  const loadPostHandler = (event) => {
    setRenderedPost(event.target.textContent);
    setViewingPost(true);
  };

  const postHandler = (post) => {
    props.onPost(post);
    setCreatingPost();
  };

  const createPost = () => {
    setCreatingPost(true);
  };

  const closePostCreateHandler = (event, target) => {
    console.log(target);
    setCreatingPost(false);
  };

  let posts = props.posts.map((post, index) => {
    return (
      <div
        onClick={loadPostHandler}
        key={index}
        className={styles.postGridItem}
      >
        {post.title}
      </div>
    );
  });

  if (props.posts.length === 0) {
    posts = (
      <div className={styles.noPosts}>
        <h2>No posts yet</h2>
      </div>
    );
  }

  const closePreviewHandler = () => {
    setViewingPost(false);
  };

  return (
    <div>
      {viewingPost && (
        <PostViewer
          closePreview={closePreviewHandler}
          post={renderedPost}
          postsArray={props.posts}
        />
      )}
      {creatingPost && (
        <CreatePost
          userName={props.userName}
          onPost={postHandler}
          setCreatingPost={setCreatingPost}
        />
      )}
      <div className={styles.postsContainer}>
        {props.posts && posts}
        <div className={styles.buttonContainer}>
          <Button onClick={createPost}>Create Post</Button>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
