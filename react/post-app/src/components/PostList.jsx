import { useState } from "react";

import PropTypes from "prop-types";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts])
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Eugenia" body="Check out the full course!" />
      </ul>
    </>
  );
};

PostsList.propTypes = {
  isPosting: PropTypes.boolean,
  onStopPosting: PropTypes.function,
};

export default PostsList;
