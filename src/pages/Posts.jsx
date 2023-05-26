import { useEffect, useState } from "react";
// import PostList from "./components/PostList";

import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, numberPages } from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import PrevAndNextPaginationButtons from "../UI/pagination/PrevAndNextPaginationButtons";
import PostList from "../components/PostList";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [pagination, setPagination] = useState({
    limit: 5,
    page: 0,
    totalPage: 0,
  });

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll(pagination.limit, pagination.page);

    // ВЫЧИТЫВАЕМ КОЛИЧЕСТВО СТРАНИЦ
    const totalCount = posts.headers["x-total-count"];
    setPagination({
      ...pagination,
      totalPage: getPageCount(totalCount, pagination.limit),
    });
    setPosts(posts.data);
  });

  //
  const getLengthPages = numberPages(pagination.totalPage);

  useEffect(() => {
    fetchPost();
  }, [pagination.page, pagination.limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    setModal(false);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0", color: "red" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ color: "red" }}>Произошла ошибка {postError}</h1>
      )}

      <PrevAndNextPaginationButtons
        setPagination={setPagination}
        pagination={pagination}
      />
      {isPostsLoading ? (
        <div style={{ marginTop: "30px" }}>
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      )}
      <Pagination
        setPagination={setPagination}
        getLengthPages={getLengthPages}
        pagination={pagination}
      />
    </div>
  );
}

export default Posts;
