import style from "./MyButton.module.css";
function MyButton({ children, ...props }) {
  return (
    <>
      <button {...props} className={style.my_button}>
        {children}
      </button>
    </>
  );
}

export default MyButton;
