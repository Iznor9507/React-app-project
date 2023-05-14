import { useState } from "react";
import PostList from "./components/PostList";
import PostFom from "./components/PostForm";
import MySelect from "./UI/MySelect/MySelect";

function App() {
  const [selectedSort, setSelectedSort] = useState("");
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

  const sort = [
    { value: "title", nameSort: "По названию" },
    { value: "index", nameSort: "По очереди" },
  ];

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  return (
    <div className="App">
      <PostFom create={createPost} />
      <hr style={{ margin: "15px 0", color: "red" }} />
      <MySelect
        onChange={sortPosts}
        value={selectedSort}
        options={sort}
        defaultValue={"Сортировка по:"}
      />

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1>Постов нет</h1>
      )}
    </div>
  );
}

export default App;
