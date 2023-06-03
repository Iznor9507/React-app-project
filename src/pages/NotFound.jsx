import { Link } from "react-router-dom";

function NotFound() {
    return ( <> 
    <h1>Страница не найдена</h1>
    <Link to='/posts'>Вернуться на страницу постов</Link>
    </> );
}

export default NotFound;