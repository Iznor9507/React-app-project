import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

function Login() {
  return (
    <>
      <h2>Авторизация</h2>

      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Вход</MyButton>
      </form>
    </>
  );
}
export default Login;
 