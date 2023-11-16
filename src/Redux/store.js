import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostSlice from "./PostSlice";
import CommentsSlice from "./CommentsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    posts: PostSlice,
    Comments: CommentsSlice,
  },
});

store.subscribe(() => {
  const { user } = store.getState();
  const { posts } = store.getState();
  const { Comments } = store.getState();
  localStorage.setItem("UserState", JSON.stringify(user));
  localStorage.setItem("UserPost", JSON.stringify(posts));
  localStorage.setItem("userComments", JSON.stringify(Comments));
});
