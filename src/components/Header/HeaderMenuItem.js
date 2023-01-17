const HeaderMenuItem = (props) => {
  const eventHandler = (event) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <li>
      <div>
        <span onClick={eventHandler}>{props.children}</span>
      </div>
    </li>
  );
};

export default HeaderMenuItem;
