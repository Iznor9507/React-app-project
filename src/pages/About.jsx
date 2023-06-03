import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <div style={{marginTop: '100px'}}>


      <h1 style={{color: 'gold'}}>Эта Главная страница </h1>
      <h1 style={{color: 'red', marginTop: '10px'}}>Добро Пожаловать</h1>
      <Link to='/posts' style={{color: 'black'}} >Перейти на страницу постов</Link>
    </div>
    </>
  );
}

export default About;
