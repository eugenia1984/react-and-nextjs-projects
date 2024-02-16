import { useLoaderData } from "react-router-dom";

import Post from "./Post";

import classes from "./PostList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

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
      {posts.length > 0 && (
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
      {posts.length === 0 && (
        <div className={classes.center}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
