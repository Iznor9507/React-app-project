import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetcComments, isCommLoading, ComError] = useFetching(async () => {
    const response = await PostService.getByComment(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetching();
    fetcComments();
  }, []);

  return (
    <>
      <h1>Вы открыли страницу поста</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h2>Комментарии</h2>
      <div>
        {comments.map((item) => (
          <div style={{ marginTop: 50 }}>
            <h5 style={{ color: "red" }}>{item?.name}</h5>
            <h5>{item?.email}</h5>
            <p>{item?.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostIdPage;
