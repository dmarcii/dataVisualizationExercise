import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

interface postsState {
  [key: string]: any  
}

const initialState: postsState = {
  value: [],
};

const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, () => {
        console.log("posts.pending");
      })
      .addCase(
        getPosts.fulfilled,
        (state, action: PayloadAction<postsState>) => {
          state.value = action.payload;
        }
      )
  },
});

export const getPosts = createAsyncThunk(
    "posts/get",
    async (amount: Array<postsState>) => {
      const users = await axios.get("https://65eb653e43ce16418933cb8b.mockapi.io/digital-core/api/v1/posts")
      const usersData = users.data
      return usersData;
    }
  );


export default postsSlice.reducer;