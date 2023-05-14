import { useState } from "react";
import PostItem from "./PostItem";

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
  return (
    <>
      {/* <form>
        <input
          onChange={hundleLiveSearch}
          type="text"
          value={liveSearchInput}
        />
      </form> */}

      {posts.map((post, index) => (
        <PostItem remove={remove}  number={index + 1} key={post.id}  post={post} />
      ))}
    </>
  );
}

export default PostList;
