import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth";
import { userReducer } from "./users/user";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export default store;
