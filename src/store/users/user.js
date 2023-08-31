import { createSlice, original } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload) => {
    const result = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      payload
    );
    return result.data;
  }
);

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  console.log("calling api for testing");
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(result.data);

  return result.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

  return id;
});

const user = createSlice({
  name: "user",
  initialState: {
    users: [],
    addedUsers: [],
    isCreatingUser: false,
    isLoadingUsers: false,
    isDeletingUser: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.isCreatingUser = true;
      state.error = "";
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isCreatingUser = false;
      state.error = "";
      state.addedUsers.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isCreatingUser = false;
      state.error = "failed to create user";
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoadingUsers = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoadingUsers = false;
      state.users = [...action.payload, ...state.addedUsers];
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isDeletingUser = true;
      state.error = "";
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isDeletingUser = false;
      state.error = "";
      //   return [...state.users.filter((user) => user.id !== action.payload)]
      console.log(original(state.users), state.users);
      // state.users = [...original(state.users).filter((user) => user.id !== action.payload)]
      return {
        ...state,
        users: [
          ...original(state.users).filter((user) => user.id !== action.payload),
        ],
      };
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isDeletingUser = false;
      state.error = "failed to delete user";
    });
  },
});

export const userActions = user.actions;
export const userReducer = user.reducer;
