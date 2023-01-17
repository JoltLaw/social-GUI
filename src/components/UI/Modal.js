import style from "./Modal.module.css";

const Modal = (props) => {
  const onClickHandler = (event) => {
    props.onClick(event.target);
  };

  return (
    <div className={style.Modal} onClick={onClickHandler} id="Modal">
      {props.children}
    </div>
  );
};

export default Modal;
