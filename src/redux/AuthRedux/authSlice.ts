import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { userLoginAction, userRegistrAction } from './AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: AuthState = {
  loading: false,
  isAuth: false,
  isToken: '',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenAction(state, action: PayloadAction<string>) {
      state.isToken = action.payload;
    },
    onLogout: (state) => {
      AsyncStorage.removeItem('@token');
      state.loading = false;
      state.isAuth = false;
      state.error = null;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //Sing in
      .addCase(userLoginAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        userLoginAction.fulfilled,
        (state, action: PayloadAction<null>) => {
          state.loading = false;
          state.error = action.payload;
        },
      )
      .addCase(
        userLoginAction.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        },
      )
      //Sign up
      .addCase(userRegistrAction.pending, state => {
        state.loading = true;
      })
      .addCase(
        userRegistrAction.fulfilled,
        (state, action: PayloadAction<null>) => {
          state.loading = false;
          state.error = action.payload
        },
      )
      .addCase(userRegistrAction.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { onLogout, setTokenAction, setIsAuth } = authSlice.actions;

export default authSlice.reducer;
