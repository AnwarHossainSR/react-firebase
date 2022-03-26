import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "redux/actions/authAtions";
import { ILogin, IRegister } from "types";

export const authRegister = createAsyncThunk(
  "auth/register",
  async (user: IRegister) => {
    return await registerApi(user);
  }
);
export const authLogin = createAsyncThunk(
  "auth/login",
  async (user: ILogin) => {
    return await loginApi(user);
  }
);

export interface AuthState {
  currentUser?: any;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith("auth") && type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.startsWith("auth") && type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
