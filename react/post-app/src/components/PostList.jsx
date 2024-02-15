import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Pedro" body="React.js is awesome!" />
        <Post author="Eugenia" body="Check out the full course!" />
      </ul>
    </>
  );
};

export default PostsList;
