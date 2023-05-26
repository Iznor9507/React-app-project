import React from "react";
import style from "./MyInput.css";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} className={style.MyInput} {...props} />
    </>
  );
});

export default MyInput;
