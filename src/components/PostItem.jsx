import MyButton from "../UI/MyButton/MyButton";
import "../styles/Post.css";
import {useNavigate} from 'react-router-dom'
function PostItem({ post, number, remove }) {

  const navigate = useNavigate()
  

  return (
    <>
      <div className="post">
        <div className="post_content">
          <h2>
            {number}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)} className="delete_button">
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(post)} className="delete_button">
          Удалить
        </MyButton>
      </div>
    </>
  );
}

export default PostItem;
