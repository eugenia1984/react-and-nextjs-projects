import PropTypes from "prop-types";

import classes from "./NewPost.module.css";

const NewPost = ({ onBodyChange, onAuthorChange }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows={3} required onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"  required onChange={onAuthorChange} />
      </p>
    </form>
  );
};

NewPost.propTypes = {
  onBodyChange: PropTypes.function,
  onAuthorChange: PropTypes.function,
};
export default NewPost;
