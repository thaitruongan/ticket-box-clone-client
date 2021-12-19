import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    currentMovie: {},
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addCurrentMovie(state, action) {
            state.token = action.payload.token;
            state.currentMovie = action.payload.movie
        },

        updateCurrentMovie(state) {

        },
    },
});

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {addCurrentMovie, updateCurrentMovie} = movieSlice.actions;

export const selectToken = (state) => state.movie.token;
export const selectCurrentMovie = (state) => state.movie.currentMovie;
