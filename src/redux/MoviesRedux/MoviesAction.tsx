import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { MovieBodyType, MoviesType, MovieType } from './types';

export const getMoviesAction = createAsyncThunk<MoviesType[], string>('movie/getMovies', async (token, thunkAPI) => {
    try {
        const config = {
            headers: {
                'Authorization': `${token}`
            },
        };
        const response = await axios.get(`/movies?sort=year&order=DESC&limit=10&offset=0`, config);

        return response.data.data;
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

export const createMovieAction = createAsyncThunk<MovieType, { token: string; movie: MovieBodyType, navigation: any }>('movie/createMovie', async ({ token, movie, navigation }, thunkAPI) => {
    try {
        const config = {
            headers: {
                'Authorization': `${token}`
            },
        };
        const response = await axios.post(`/movies`, movie, config);

        if (response && response?.data && response?.data?.status === 1) {
            thunkAPI.dispatch(getMoviesAction(token))
            navigation.goBack()
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


export const getOneMovieAction = createAsyncThunk<MovieType[], { token: string, id: number }>('movie/getOneMovie', async ({ token, id }, thunkAPI) => {
    try {
        const config = {
            headers: {
                'Authorization': `${token}`
            },
        };
        const response = await axios.get(`/movies/${id}`, config);


        return response.data.data;
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

export const deleteMovieAction = createAsyncThunk<string | number, { token: string, id: number, navigation: any }>('movie/deleteMovie', async ({ token, id, navigation }, thunkAPI) => {
    try {
        const config = {
            headers: {
                'Authorization': `${token}`
            },
        };
        const response = await axios.delete(`/movies/${id}`, config);

        if (response && response?.data && response?.data?.status === 1) {
            thunkAPI.dispatch(getMoviesAction(token))
            navigation.goBack()
        }

        return response.data.data;
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