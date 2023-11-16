import { createSlice } from "@reduxjs/toolkit";

const initialPostState = JSON.parse(localStorage.getItem("userComments")) || {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialPostState,
  reducers: {
    addComments(state, action) {
      const { comment, id, userId } = action.payload;
      state.comments.push({ comment, id, userId });
    },
    removeComments(state, action) {
      const postId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    // Other reducers can be added as needed
  },
});

export const { addComments, removeComments } = commentSlice.actions;
export default commentSlice.reducer;
