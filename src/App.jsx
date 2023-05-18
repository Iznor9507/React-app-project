import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostFom from "./components/PostForm";
import MySelect from "./UI/MySelect/MySelect";
import MyInput from "./UI/MyInput/MyInput";

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
  const [searchPost, setSearchPost] = useState("");

  const sortData = [
    { value: "title", nameSort: "По названию" },
    { value: "body", nameSort: "По очереди" },
  ];

  // СОРТИРОВКА
  const memoSeacrchValue = useMemo(() => {
    console.log("ascascasc");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort]?.localeCompare(b[setSelectedSort])
      );
    } else {
      return posts;
    }
  }, [posts, selectedSort]);


  // ЖИВОЙ  ПОИСК
  const sortedAndSearchValue = useMemo(() => {
    return memoSeacrchValue.filter((item, index) =>
      item.title.toLowerCase().includes(searchPost.toLocaleLowerCase())
    );
  }, [searchPost, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostFom create={createPost} />
      <hr style={{ margin: "15px 0", color: "red" }} />
      <MyInput
        placeholder="Поиск по названию"
        onChange={(event) => setSearchPost(event.target.value)}
        value={searchPost}
      />
      <MySelect
        onChange={sortPosts}
        value={selectedSort}
        options={sortData}
        defaultValue={"Сортировка по:"}
      />

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchValue} />
      ) : (
        <h1>Постов нет</h1>
      )}
    </div>
  );
}

export default App;
