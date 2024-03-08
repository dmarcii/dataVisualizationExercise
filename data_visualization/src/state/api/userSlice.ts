import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface userState {
  [key: string]: any  
}
const initialState: userState = {
  value: [{}],
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, () => {
        console.log("login.pending");
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<String>) => {
          state.value = action.payload;
        }
      )
  },
});


export const login = createAsyncThunk(
  "user/login",
  async (userName: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return userName;
  }
);

export const getUsers = createAsyncThunk(
  "user/login",
  async (userName: string) => {
    const users = await axios.get("https://65eb653e43ce16418933cb8b.mockapi.io/digital-core/api/v1/users")
    const usersData = users.data
    return usersData;
  }
);

export default userSlice.reducer;