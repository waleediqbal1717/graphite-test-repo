import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';

type UserInitialState = {
  user: User | null;
  isLoading: boolean;
  country: string;
  isFacebookButtonLoading: boolean;
  isAppleButtonLoading: boolean;
  isGoogleButtonLoading: boolean;
};
const initialState: UserInitialState = {
  user: null,
  country: '',
  isLoading: false,
  isFacebookButtonLoading: false,
  isAppleButtonLoading: false,
  isGoogleButtonLoading: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFacebookButtonLoading: (state, action) => {
      state.isFacebookButtonLoading = action.payload;
    },
    setGoogleButtonLoading: (state, action) => {
      state.isGoogleButtonLoading = action.payload;
    },
    setAppleButtonLoading: (state, action) => {
      state.isAppleButtonLoading = action.payload;
    },
  },
});

export const {
  setUser,
  setCountry,
  setLoading,
  setFacebookButtonLoading,
  setGoogleButtonLoading,
  setAppleButtonLoading,
} = userSlice.actions;
export default userSlice.reducer;
