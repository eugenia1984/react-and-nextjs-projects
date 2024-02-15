import PropTypes from "prop-types";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

import classes from "./PostList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
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
