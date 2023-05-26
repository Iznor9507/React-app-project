import { useState } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({ posts, remove }) {
  if (!posts.length) {
    return <h1>Постов нет</h1>;
  }

  return (
    <>
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
