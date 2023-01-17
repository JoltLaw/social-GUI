import Modal from "../UI/Modal";
import Button from "../UI/Button";
import style from "./CreatePost.module.css";
import { useState } from "react";

const CreatePost = (props) => {
  const [title, setTitle] = useState(<h1>Title</h1>);
  const [body, setBody] = useState(<h2>Body</h2>);

  const postHandler = (event) => {
    event.preventDefault();

    if (title === " ") {
      alert("Post must contain a title");
    }

    if (body === " ") {
      alert("Post must contain a body");
    }

    const Post = {
      user: props.userName,
      title: title,
      body: body,
    };
    props.onPost(Post);
    setTitle();
    setBody();
  };

  const updateTitleHandler = (event) => {
    setTitle(<h1>{event.target.value}</h1>);
  };

  const updatePostBody = (event) => {
    setBody(<p className={style.body}>{event.target.value}</p>);
  };

  const onClickHandler = (target) => {
    if (target.id === "Modal") {
      props.setCreatingPost(false);
    }
  };

  return (
    <Modal id="CreateModal" onClick={onClickHandler}>
      <div className={style.container}>
        <div className={style.preview}>
          {title}
          <span className={style.poster}>by: {props.userName}</span>
          {body}
        </div>
        <form>
          <div className={style.postControls}>
            <label htmlFor="Title">Title</label>
            <input
              name="Title"
              type="text"
              onChange={updateTitleHandler}
              placeholder="Title"
            />
            <label htmlFor="textBody">Body</label>
            <input
              name="textBody"
              type="text"
              className={style.postBodyInput}
              onChange={updatePostBody}
              placeholder="Body"
            />
            <Button onClick={postHandler}>Create!</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreatePost;
