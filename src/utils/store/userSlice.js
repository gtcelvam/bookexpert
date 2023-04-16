import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
