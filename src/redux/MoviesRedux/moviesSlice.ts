import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState, MoviesType, MovieType } from './types';
import { createMovieAction, deleteMovieAction, getMoviesAction, getOneMovieAction } from './MoviesAction';

const initialState: MovieState = {
    loading: false,
    moviesData: [],
    movieOneData: [],
    error: null,
};

export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            //Get movies
            .addCase(getMoviesAction.pending, state => {
                state.loading = true;
            })
            .addCase(
                getMoviesAction.fulfilled,
                (state, action: PayloadAction<MoviesType[]>) => {
                    state.loading = false;
                    const sortedMovies = action.payload.sort((a, b) => {
                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
                            return -1;
                        }
                        if (a.title.toLowerCase() > b.title.toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    });
                    state.moviesData = sortedMovies;
                },
            )
            .addCase(
                getMoviesAction.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                },
            )
            //Get one movie
            .addCase(getOneMovieAction.pending, state => {
                state.loading = true;
            })
            .addCase(
                getOneMovieAction.fulfilled,
                (state, action: PayloadAction<MovieType[]>) => {
                    state.loading = false;
                    state.movieOneData = action?.payload;
                },
            )
            .addCase(
                getOneMovieAction.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                },
            )
            // Create Movie
            .addCase(createMovieAction.pending, state => {
                state.loading = true;
            })
            .addCase(
                createMovieAction.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload
                },
            )
            .addCase(
                createMovieAction.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                },
            )
            // Delete Movie
            .addCase(deleteMovieAction.pending, state => {
                state.loading = true;
            })
            .addCase(
                deleteMovieAction.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload
                },
            )
            .addCase(
                deleteMovieAction.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                },
            )
    },
});

// export const { } = moviesSlice.actions;

export default moviesSlice.reducer;