import { Outlet } from "react-router-dom";

import PostsList from "../components/PostList";

export const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};
