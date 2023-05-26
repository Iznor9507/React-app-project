import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <div style={{ marginLeft: 370 }}>
          <Link to="/about">О сайте</Link>
          <Link style={{ marginLeft: 100 }} to="/posts">
            Главная
          </Link>
        </div>

        <Routes >
          
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
       \
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
