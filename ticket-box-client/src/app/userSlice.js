import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: "",
    currentUser: {},
    isSelectSeat: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addCurrentUser(state, action) {
            state.token = action.payload.token;
            state.currentUser = action.payload.user
        },

        updateCurrentUser(state, action) {
            state.currentUser = action.payload
        },

        removeCurrentUser(state) {

        },
    },
});

const userReducer = userSlice.reducer;
export default userReducer;

export const {addCurrentUser, updateCurrentUser, removeCurrentUser} = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectSeatState = (state) => state.user.isSelectSeat;