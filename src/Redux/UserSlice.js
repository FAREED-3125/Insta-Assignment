import { createSlice } from "@reduxjs/toolkit";

const ExistingUser = JSON.parse(localStorage.getItem("UserState"));
const initialState = ExistingUser || {
  user: null,
};
const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cleatUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, cleatUser } = UserSlice.actions;

export default UserSlice.reducer;
