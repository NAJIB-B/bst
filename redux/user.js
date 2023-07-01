import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.authToken = action.payload;
    },
    setLoginProfile: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setUserAuth, setLoginProfile } = userSlice.actions;

export default userSlice.reducer;
