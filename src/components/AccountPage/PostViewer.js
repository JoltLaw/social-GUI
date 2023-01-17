import Modal from "../UI/Modal";
import style from "./PostViewer.module.css";

const PostViewer = (props) => {
  let body;
  let user;
  const closeModalHandler = () => {
    props.closePreview();
  };

  const postTitle = <h1>{props.post}</h1>;

  props.postsArray.forEach((post) => {
    if (props.post === post.title.props.children) {
      body = post.body;
      user = post.user;
    }
  });

  return (
    <Modal onClick={closeModalHandler}>
      <div className={style.container}>
        <div>
          {postTitle}
          <span>{user}</span>
          <p>{body.props.children}</p>
        </div>
      </div>
    </Modal>
  );
};

export default PostViewer;
