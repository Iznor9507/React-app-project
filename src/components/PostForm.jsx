import { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

function PostFom({create}) {

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost ={ 
    ...post, 
    id: Date.now()
    }
create(newPost)
    // setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

    //Отключение поведение формы по умолчанию
    const hundleInputTitle = (e) => {
        setPost({ ...post, title: e.target.value });
      };
    
      const hundleInputBody = (e) => {
        setPost({ ...post, body: e.target.value });
      };
    

    return ( 
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
      </form>
        );
}

export default PostFom;