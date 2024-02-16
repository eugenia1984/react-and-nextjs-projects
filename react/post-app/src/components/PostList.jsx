import { useEffect, useState } from "react";

import Post from "./Post";

import classes from "./PostList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();

      if(!response.ok) {
        console.error("Error fetching the posts");
      }

      setPosts(responseData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  // const addPostHandler = (postData) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // };

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post
              key={post.author + index}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div className={classes.center}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div className={classes.center}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
