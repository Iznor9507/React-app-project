import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostFom from "./components/PostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Python",
      body: "My name is Iznaur, I am Frontend Developer",
    },
    {
      id: 2,
      title: "JavaScript",
      body: "My nvxvxcxcxcxcame is Iznaur, I am Frontend Developer",
    },
    { id: 3, title: "C#", body: "My name is Iznaur, I am Frontend Developer" },
  ]);
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchPost, setSearchPost] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  // СОРТИРОВКА
  const memoSeacrchValue = useMemo(() => {
    console.log("ascascasc");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort]?.localeCompare(b[filter.query])
      );
    } else {
      return posts;
    }
  }, [posts, filter.sort]);
  console.log(memoSeacrchValue);
  // ЖИВОЙ  ПОИСК
  const sortedAndSearchValue = useMemo(() => {
    return memoSeacrchValue.filter((item) =>
      item.title.toLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostFom create={createPost} />
      <hr style={{ margin: "15px 0", color: "red" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchValue.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchValue} />
      ) : (
        <h1>Постов нет</h1>
      )}
    </div>
  );
}

export default App;
