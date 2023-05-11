import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

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
      body: "My name is Iznaur, I am Frontend Developer",
    },
    { id: 3, title: "C#", body: "My name is Iznaur, I am Frontend Developer" },
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  //Отключение поведение формы по умолчанию
  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: '', body: ''})
   
  };

  const hundleInputTitle = (e) => {
    setPost({...post, title:e.target.value});
  };

  const hundleInputBody = (e) => {
    setPost({...post, body:e.target.value});
  };

// const hundleDeletePost = (e) => {
//  const fltr = posts.filter((item, index) => item !== index)
//  console.log(fltr)
// }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={hundleInputTitle}
          type="text"
          placeholder="Напиши заголовок"
        />
        <MyInput
          value={post.body}
          onChange={hundleInputBody}
          type="text"
          placeholder="Напиши пост"
        />
        <MyButton onClick={addNewPost} disabled={false}>
          Добавить пост
        </MyButton>
        {/* <MyInput >Напиши</MyInput> */}
      </form>
      <PostList   posts={posts} />
    </div>
  );
}

export default App;
