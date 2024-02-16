import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import classes from "./Post.module.css";

const Post = ({ id, author, body }) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
