import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PostIdPage from "./pages/PostIdPage";
import Login from "./pages/Login";

function App() {
  const isAuth = true;
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">О сайте</Link>
          <Link style={{ marginLeft: 100 }} to="/posts">
            Посты
          </Link>
        </div>
        {isAuth ? (
          <Routes>
            <Route path="/" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<NotFound replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
