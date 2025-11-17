import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import postReducer from "./features/posts/postsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      posts: postReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};
