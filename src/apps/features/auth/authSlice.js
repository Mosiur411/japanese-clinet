import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userloading: (state, action) => {
      state.isLoading = false;
    },
    userLoggedIn: (state, action) => {
      state.userInfo = action.payload;
    },
    userLoggedOut: (state) => {
      state.userInfo = null;
      
    },
  },
});
export const { userLoggedIn, userLoggedOut,userloading } = authSlice.actions;
export default authSlice.reducer;
