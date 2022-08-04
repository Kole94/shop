import User from "../models/user";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user?: User;
  login: Boolean;
  register: User[];
}

const initialState: AuthState = {
  login: false,
  register: [
    {
      name: "Kole",
      password: "pass",
      phone: "action.payload.phone",
      address: "action.payload.address",
      email: "action.payload.email",
      lastname: "action.payload.lastname",
      isAdmin: true,
    },
  ],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      let user: User = {
        name: action.payload.name,
        password: action.payload.password,
        phone: action.payload.phone,
        address: action.payload.address,
        email: action.payload.email,
        lastname: action.payload.lastname,
        isAdmin: action.payload.isAdmin,
      };
      return {
        ...state,
        register: [...state.register, user],
      };
    },
    login: (state, action) => {
      const user = state.register.find(
        (element: User) =>
          element.password == action.payload.password &&
          element.name == action.payload.username
      );
      console.log(action.payload.username, action.payload.password);
      if (user) {
        return {
          ...state,
          user: user,
          login: true,
        };
      } else {
        return { ...state };
      }
    },
    logout: (state, action) => {
      return {
        ...state,
        user: undefined,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, register } = authSlice.actions;

export default authSlice.reducer;
