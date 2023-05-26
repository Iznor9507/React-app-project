import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  // СОРТИРОВКА

  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [posts, sort]);

  return sortedPosts;
};

// ЖИВОЙ  ПОИСК
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, posts]);
  return sortedAndSearchedPosts;
};
