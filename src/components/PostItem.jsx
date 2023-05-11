import "../styles/Post.css";
function PostItem({post, number}) {



  return (
    <>
      <div className="post">
        <div className="post_content">
          <h2>{number}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
        <button className="delete_button">Удалить</button>
      </div>
    </>
  );
}

export default PostItem;
