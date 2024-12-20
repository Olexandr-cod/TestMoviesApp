import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { SigninBodyType, SignupBodyType } from './types';
import { RootState } from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsAuth } from './authSlice';
import { getMoviesAction } from '../MoviesRedux/MoviesAction';

export const userLoginAction = createAsyncThunk<any, SigninBodyType>('auth/login', async (dataLogin, thunkAPI) => {
    try {
        const response = await axios.post('/sessions', dataLogin);

        if (response && response?.data && response?.data?.status === 1) {
            const token = response?.data?.token;
            AsyncStorage.setItem('@token', token);
            axios.defaults.headers.Authorization = 'Bearer ' + token;
            thunkAPI.dispatch(setIsAuth(true));
            thunkAPI.dispatch(getMoviesAction(token));
        }
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error) {
                return thunkAPI.rejectWithValue(error);
            } else {
                return thunkAPI.rejectWithValue(error);
            }
        }
    }
});

export const userRegistrAction = createAsyncThunk<any, SignupBodyType>('auth/registr', async (dataRegistr, thunkAPI) => {
    try {
        const response = await axios.post('/users', dataRegistr);

        console.log('response-->', JSON.stringify(response?.data, null, 2))
        if (response && response?.data && response?.data?.status === 1) {
            const token = response?.data?.token;
            AsyncStorage.setItem('@token', token);
            axios.defaults.headers.Authorization = 'Bearer ' + token;
            thunkAPI.dispatch(setIsAuth(true));
            thunkAPI.dispatch(getMoviesAction(token));
        }
        return response.data;
    } catch (error) {

        console.log('error-->', JSON.stringify(error, null, 2))
        if (error instanceof AxiosError) {
            if (error) {
                return thunkAPI.rejectWithValue(error);
            } else {
                return thunkAPI.rejectWithValue(error);
            }
        }
    }
});