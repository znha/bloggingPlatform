import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPostApi, updatePostApi } from "./postsApi";

export const createPost = createAsyncThunk(
  "posts/create",
  async (data, thunkAPI) => {
    try {
      return await createPostApi(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/edit",
  async (data, thunkAPI) => {
    try {
      return await updatePostApi(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: null, currentStatus: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.currentStatus = "loading";
      })
      .addCase(createPost.fulfilled, (state) => {
        state.currentStatus = "succeeded";
      })
      .addCase(createPost.rejected, (state, action) => {
        state.currentStatus = "failed";
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.currentStatus = "loading";
      })
      .addCase(updatePost.fulfilled, (state) => {
        state.currentStatus = "succeeded";
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.currentStatus = "failed";
        state.error = action.payload;
      });
  },
});
const postReducer = postsSlice.reducer;

export default postReducer;
