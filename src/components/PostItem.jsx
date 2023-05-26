import MyButton from "../UI/MyButton/MyButton";
import "../styles/Post.css";
function PostItem({ post, number, remove }) {
  return (
    <>
      <div className="post">
        <div className="post_content">
          <h2>
            {number}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
        <MyButton onClick={() => remove(post)} className="delete_button">
          Удалить
        </MyButton>
      </div>
    </>
  );
}

export default PostItem;
