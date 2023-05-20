import { useState } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({ posts, remove }) {
  //   const [liveSearchInput, setLiveSearchInput] = useState("");
  //   const [foundPosts, setFountPosts] = useState([]);

  //   const hundleLiveSearch = (event) => {
  //     event.preventDefault();
  //     setLiveSearchInput(event.target.value);
  //     setFountPosts(
  //       posts.filter((item) =>
  //         liveSearchInput.toLowerCase().includes(item.title.toLowerCase())
  //       )
  //     );
  //   };
  //   console.log(foundPosts);

  if (!posts.length) {
    return <h1>Постов нет</h1>;
  }

  return (
    <>
      {/* <form>
        <input
          onChange={hundleLiveSearch}
          type="text"
          value={liveSearchInput}
        />
      </form> */}
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              number={index + 1}
              key={post.id}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

export default PostList;
